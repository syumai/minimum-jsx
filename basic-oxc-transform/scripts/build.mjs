import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { transform } from "oxc-transform";

const src = new URL("../src/", import.meta.url);
const dist = new URL("../dist/", import.meta.url);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const { code } = await transform(
  "src/index.jsx",
  await readFile(new URL("index.jsx", src), "utf8"),
  {
    jsx: {
      runtime: "classic",
      pragma: "h",
    },
  },
);

await writeFile(new URL("index.js", dist), `${code}\n`);
await copyFile(new URL("jsxRenderer.js", src), new URL("jsxRenderer.js", dist));
