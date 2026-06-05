import { h } from "./jsxRenderer.js";

const num = 3;
console.log(
  <conditions>
    <if condition={num % 2 === 0}>Even</if>
    <if condition={num % 2 === 1}>Odd</if>
  </conditions>,
);
console.log(
  <messages>
    Hello,
    <repeat times={num}>world!</repeat>
  </messages>,
);
