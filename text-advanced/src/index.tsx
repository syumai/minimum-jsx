import { h } from "./jsxRenderer.js";

const inner = (
  <inner attr3="value3" attr4="value4">
    Inner content 1
  </inner>
);

console.log(
  <outer attr1="value1" attr2="value2">
    Outer content
    {inner}
  </outer>,
);
