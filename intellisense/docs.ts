interface DocItems {
  [key: string]: DocElement;
}

export interface DocParam {
  name: string;
  type: string;
}

export interface DocElement {
  description: string;
  args: DocParam[];
  return: string;
}

export const DOC_ITEMS: DocItems = Object.freeze({
  eq: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  gt: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  gte: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  lt: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  lte: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  and: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  or: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  not: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  if: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  add: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  sub: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  mul: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  div: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  round: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  slice: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  lower: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  upper: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  rand: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  cases: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  choice: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  tag: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  concat: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  get: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  set: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  getr: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
  setr: {
    description: "Undocumented",
    args: [] as DocParam[],
    return: "Undocumented",
  } as DocElement,
});
