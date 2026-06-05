export function h(type: unknown, props: Record<string, unknown>, ...children: unknown[]) {
  if (typeof type === "string") {
    return {
      type,
      props,
      children,
    };
  }
  if (typeof type === "function") {
    return type({
      ...props,
      children,
    });
  }
  throw new Error("invalid type");
}

export namespace h.JSX {
  export interface IntrinsicElements {
    [elemType: string]: any;
  }
  export interface ElementChildrenAttribute {
    children: unknown[];
  }
  export type Element = any;
}
