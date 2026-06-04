export function h(type: string, props: Record<string, unknown>, ...children: unknown[]) {
  return {
    type,
    props,
    children,
  };
}

export namespace h.JSX {
  export interface IntrinsicElements {
    [elemType: string]: any;
  }
}
