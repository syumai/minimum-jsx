import { h } from "./jsxRenderer.js";

function Messages(props: { children: string[] }): string {
  return props.children.join(", ");
}

function Message(props: { text: string }): string {
  return props.text;
}

function NumberMessage(props: { number: number }): number {
  return props.number;
}

const result = (
  <Messages>
    <Message text="Hello" />
    <Message text="World" />
    <NumberMessage number={1} />
  </Messages>
);

console.log(result);
