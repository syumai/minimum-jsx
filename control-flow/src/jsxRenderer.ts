function ifElem(condition: boolean, children: unknown[]) {
  return condition ? children : null;
}

function repeatElem(times: number, children: unknown[]) {
  return Array.from({ length: times }, () => children).flat();
}

export function h(type: string, props: Record<string, unknown>, ...children: unknown[]) {
  switch (type) {
    case "if":
      if (typeof props["condition"] !== "boolean") {
        throw new Error("condition must be a boolean");
      }
      return ifElem(props["condition"], children);
    case "repeat":
      if (typeof props["times"] !== "number") {
        throw new Error("times must be a number");
      }
      return repeatElem(props["times"], children);
    default:
  }
  return { type, props, children: children.flat() };
}

export namespace h.JSX {
  export interface IntrinsicElements {
    [elemType: string]: any;
  }
}
