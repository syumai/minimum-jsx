import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "oxc-transform";

const sourceDir = fileURLToPath(new URL("../src/", import.meta.url));
const distDir = fileURLToPath(new URL("../dist/", import.meta.url));

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      yield* walk(path);
      continue;
    }

    if (entry.isFile()) {
      yield path;
    }
  }
}

await rm(distDir, { recursive: true, force: true });

for await (const sourcePath of walk(sourceDir)) {
  const relativePath = relative(sourceDir, sourcePath);
  const extension = extname(relativePath);
  const outputPath = join(distDir, relativePath.replace(/\.[cm]?jsx$/, ".js"));

  await mkdir(dirname(outputPath), { recursive: true });

  if (extension === ".jsx" || extension === ".mjsx" || extension === ".cjsx") {
    const sourceText = await readFile(sourcePath, "utf8");
    const result = await transform(sourcePath, sourceText, {
      lang: "jsx",
      sourceType: "module",
      jsx: {
        pragma: "h",
        runtime: "classic",
      },
      sourcemap: true,
    });

    if (result.errors.length > 0) {
      throw new Error(result.errors.map((error) => error.message).join("\n"));
    }

    const sourceMapComment = result.map
      ? `\n//# sourceMappingURL=${relativePath.replace(/\.[cm]?jsx$/, ".js.map")}\n`
      : "\n";

    await writeFile(outputPath, `${result.code}${sourceMapComment}`);

    if (result.map) {
      await writeFile(`${outputPath}.map`, JSON.stringify(result.map));
    }
    continue;
  }

  if (extension === ".js" || extension === ".mjs" || extension === ".cjs") {
    await writeFile(outputPath, await readFile(sourcePath, "utf8"));
  }
}
