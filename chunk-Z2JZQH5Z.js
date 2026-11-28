import {
  checkRequest
} from "./chunk-JX26TFGZ.js";

// libs/bookings/src/lib/request-body.ts
var DEPTH_MAX = 32;
var SKIP = /* @__PURE__ */ Symbol("skip");
function requestBody(schema, value) {
  const body = fit(schema.node, value, 0);
  return body === SKIP ? {} : body;
}
function fit(node, value, depth) {
  if (depth > DEPTH_MAX)
    throw new Error("Request schema is too deep");
  if (value === void 0)
    return SKIP;
  switch (node.kind) {
    case "nullable":
      return value === null ? null : fit(node.inner, value, depth + 1);
    case "json":
      return JSON.parse(JSON.stringify(value));
    case "integer":
      if (typeof value === "string" && /^-?\d+$/.test(value)) {
        return Number(value);
      }
      return value === null ? SKIP : value;
    case "literal":
      if (typeof value === "string" && !node.values.has(value)) {
        const lower = value.toLowerCase();
        if (node.values.has(lower))
          return lower;
      }
      return value === null ? SKIP : value;
    case "array":
      if (!Array.isArray(value))
        return value === null ? SKIP : value;
      return value.map((item) => fit(node.items, item, depth + 1)).filter((item) => item !== SKIP);
    case "record":
      if (!isRecord(value))
        return value === null ? SKIP : value;
      return fitEntries(Object.keys(value), value, () => node.values, depth);
    case "object":
      if (!isRecord(value))
        return value === null ? SKIP : value;
      return fitEntries(node.fields.map((_) => _.key), value, (key) => node.fields.find((_) => _.key === key).node, depth);
    case "union": {
      const fits = node.variants.some((variant) => checkRequest({ node: variant }, value).ok);
      if (fits)
        return value;
      const options = node.variants.map((variant) => fit(variant, value, depth + 1));
      const match = options.find((option, index) => option !== SKIP && checkRequest({ node: node.variants[index] }, option).ok);
      return match ?? options[0];
    }
    default:
      return value === null ? SKIP : value;
  }
}
function fitEntries(keys, value, nodeFor, depth) {
  const output = {};
  for (const key of keys) {
    if (!Object.hasOwn(value, key))
      continue;
    const item = fit(nodeFor(key), value[key], depth + 1);
    if (item !== SKIP)
      output[key] = item;
  }
  return output;
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export {
  requestBody
};
//# debugId=ed8c0a7c-c9c2-54d3-aab2-21970e0b418c
//# sourceMappingURL=chunk-Z2JZQH5Z.js.map
