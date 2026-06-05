import { h } from "./jsxRenderer.js";

function Message(props: { text: string }) {
  return <message>{props.text}</message>;
}

console.log(
  JSON.stringify(
    <messages>
      <Message text="Hello" />
      <Message text="World" />
    </messages>,
    null,
    2,
  ),
);
