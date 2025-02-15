function foo(a, b) {
  if (a === null || b === null) {
    return null;
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null));// null

function bar(a, b) {
  if (a == null || b == null) {
    return null;
  }
  return a + b;
}

console.log(bar(1, 2)); // 3
console.log(bar(null, 2)); // null
console.log(bar(1, null)); // null
console.log(bar(null, null)); // null
console.log(bar(1, '2')); // 12
console.log(bar('1', 2)); // 12