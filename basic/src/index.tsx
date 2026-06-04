// @jsx h

import { h } from "./jsxRenderer.js";

console.log(<example>Hello, world!</example>);
console.log(
  JSON.stringify(
    <outer attr1="value1" attr2="value2">
      Outer content
      <inner attr3="value3" attr4="value4">
        Inner content 1
      </inner>
      <inner>
        Inner content 2
      </inner>
    </outer>,
    null,
    2,
  ),
);
