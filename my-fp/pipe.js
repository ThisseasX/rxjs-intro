export const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((result, fn) => fn(result), initialValue);
