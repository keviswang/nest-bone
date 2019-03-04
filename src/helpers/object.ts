export function isObject(value: any) {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}

export function isString(value: any) {
  const type = typeof value;
  return (
    type == 'string' ||
    (type == 'object' &&
      value != null &&
      !Array.isArray(value) &&
      getTag(value) == '[object String]')
  );
}
