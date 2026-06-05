function renderValue(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(renderValue).join(",")}]`;
  }
  if (typeof value === "object" && value !== null) {
    return `#(${Object.entries(value as Record<string, unknown>)
      .map(([k, v]) => `${k}:${renderValue(v)}`)
      .join(",")})`;
  }
  return String(value);
}

export function h(type: string, props: Record<string, unknown>, ...children: unknown[]) {
  return `(${type};${renderValue(props)};${renderValue(children)})`;
}

export namespace h.JSX {
  export interface IntrinsicElements {
    example: {};
    outer: {
      attr1: string;
      attr2: string;
    };
    inner: {
      attr3: string;
      attr4: string;
    };
  }
  export type Element = string;
}
