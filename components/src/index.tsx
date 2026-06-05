import { h } from "./jsxRenderer.js";

function Messages(props: { children: string[] }): string {
  return props.children.join(", ");
}

function Message(props: { text: string }): string {
  return props.text;
}

console.log(
  <Messages>
    <Message text="Hello" />
    <Message text="World" />
  </Messages>,
);
