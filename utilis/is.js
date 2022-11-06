function getTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

export function isUndefined(value) {
  return typeof value === "undefined";
}

export function isNull(value) {
  return value === null;
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isArray(value) {
  return Array.isArray(value) || value?.constructor === Array;
}

export function isObject(value) {
  return typeof value === "object" && value !== null;
}

export function isNumber(value) {
  return typeof value === "number" || (isObject(value) && getTag(value) === "[object Number]");
}

const is = {
  undefined: isUndefined,
  null: isNull,
  array: isArray,
  function: isFunction,
  object: isObject,
  number: isNumber,
};

export default is;
