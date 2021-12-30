interface DocItems {
  [key: string]: DocElement;
}

type ValueType =
  | "string"
  | "number"
  | "boolean"
  | "member"
  | "user"
  | "any"
  | "void";
export interface DocParam {
  name: string;
  type: ValueType;
}

export interface DocElement {
  description: string;
  args: DocParam[];
  return: ValueType;
}

export const DOC_ITEMS: DocItems = Object.freeze({
  eq: {
    description: "Checks if 2 values are equal",
    args: [
      {
        name: "first",
        type: "any",
      },
      {
        name: "second",
        type: "any",
      },
    ] as DocParam[],
    return: "boolean",
  } as DocElement,
  gt: {
    description: "Checks if first is greater than second",
    args: [
      {
        name: "first",
        type: "number",
      },
      {
        name: "second",
        type: "number",
      },
    ] as DocParam[],
    return: "boolean",
  } as DocElement,
  gte: {
    description: "Checks if first is greater than or equal to second",
    args: [
      {
        name: "first",
        type: "number",
      },
      {
        name: "second",
        type: "number",
      },
    ] as DocParam[],
    return: "boolean",
  } as DocElement,
  lt: {
    description: "Checks if first is less than second",
    args: [
      {
        name: "first",
        type: "number",
      },
      {
        name: "second",
        type: "number",
      },
    ] as DocParam[],
    return: "boolean",
  } as DocElement,
  lte: {
    description: "Checks if first is less than or equal to second",
    args: [
      {
        name: "first",
        type: "number",
      },
      {
        name: "second",
        type: "number",
      },
    ] as DocParam[],
    return: "boolean",
  } as DocElement,
  and: {
    description: "Checks if first and second are true",
    args: [
      {
        name: "first",
        type: "boolean",
      },
      {
        name: "second",
        type: "boolean",
      },
    ] as DocParam[],
    return: "boolean",
  } as DocElement,
  or: {
    description: "Checks if first or second is true",
    args: [
      {
        name: "first",
        type: "boolean",
      },
      {
        name: "second",
        type: "boolean",
      },
    ] as DocParam[],
    return: "boolean",
  } as DocElement,
  not: {
    description: "Inverts value",
    args: [
      {
        name: "value",
        type: "boolean",
      },
    ] as DocParam[],
    return: "boolean",
  } as DocElement,
  if: {
    description:
      "Checks if cond is true, if so, execute true, otherwise execute false",
    args: [
      {
        name: "cond",
        type: "boolean",
      },
      {
        name: "true",
        type: "any",
      },
      {
        name: "false",
        type: "any",
      },
    ] as DocParam[],
    return: "void",
  } as DocElement,
  add: {
    description: "Adds all the numbers together",
    args: [
      {
        name: "...numbers",
        type: "number",
      },
    ] as DocParam[],
    return: "number",
  } as DocElement,
  sub: {
    description: "Subtracts all the numbers",
    args: [
      {
        name: "...numbers",
        type: "number",
      },
    ] as DocParam[],
    return: "number",
  } as DocElement,
  mul: {
    description: "Multiplies all the numbers together",
    args: [
      {
        name: "...numbers",
        type: "number",
      },
    ] as DocParam[],
    return: "number",
  },
  div: {
    description: "Divides all the numbers",
    args: [
      {
        name: "...numbers",
        type: "number",
      },
    ] as DocParam[],
    return: "number",
  } as DocElement,
  round: {
    description: "Rounds num to the nearest integer",
    args: [
      {
        name: "num",
        type: "number",
      },
    ] as DocParam[],
    return: "number",
  } as DocElement,

  slice: {
    description: "Slices str between start and finish",
    args: [
      {
        name: "str",
        type: "string",
      },
      {
        name: "start",
        type: "number",
      },
      {
        name: "end",
        type: "number",
      },
    ] as DocParam[],
    return: "string",
  } as DocElement,
  lower: {
    description: "Makes str lower case",
    args: [
      {
        name: "str",
        type: "string",
      },
    ] as DocParam[],
    return: "string",
  } as DocElement,
  upper: {
    description: "Makes str upper case",
    args: [
      {
        name: "str",
        type: "string",
      },
    ] as DocParam[],
    return: "string",
  } as DocElement,
  rand: {
    description: "Generates a random number",
    args: [] as DocParam[],
    return: "number",
  } as DocElement,
  cases: {
    description: "Selects the item at idx from items",
    args: [
      {
        name: "idx",
        type: "number",
      },
      {
        name: "..items",
        type: "any",
      },
    ] as DocParam[],
    return: "any",
  } as DocElement,
  choice: {
    description: "Selects a random item from items",
    args: [
      {
        name: "..items",
        type: "any",
      },
    ] as DocParam[],
    return: "any",
  } as DocElement,
  tag: {
    description: "Renders the text stored in tag name",
    args: [
      {
        name: "name",
        type: "string",
      },
    ] as DocParam[],
    return: "string",
  } as DocElement,
  concat: {
    description: "Concats strs together",
    args: [
      {
        name: "...strs",
        type: "string",
      },
    ] as DocParam[],
    return: "string",
  } as DocElement,
  get: {
    description: "Gets a variable by name",
    args: [
      {
        name: "name",
        type: "string",
      },
    ] as DocParam[],
    return: "any",
  } as DocElement,
  set: {
    description: "Set name variable to value",
    args: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "value",
        type: "any",
      },
    ] as DocParam[],
    return: "void",
  } as DocElement,
  getr: {
    description: "Gets an ephemeral variable by name",
    args: [
      {
        name: "name",
        type: "string",
      },
    ] as DocParam[],
    return: "any",
  } as DocElement,
  setr: {
    description: "Sets an ephemeral variable to value",
    args: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "value",
        type: "any",
      },
    ] as DocParam[],
    return: "any",
  } as DocElement,
});
