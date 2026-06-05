import { h } from "./jsxRenderer.js";

function Messages(props: { children: string[] }): string {
  return props.children.join(", ");
}

function StringMessage(props: { str: string }): string {
  return props.str;
}

function NumberMessage(props: { num: number }): number {
  return props.num;
}

const strMsg = <StringMessage str="Hello" />;
const numMsg = <NumberMessage num={1} />;

const result = (
  <Messages>
    <StringMessage str="Hello" />
    <StringMessage str="World" />
    <NumberMessage num={1} />
  </Messages>
);

console.log(result);
