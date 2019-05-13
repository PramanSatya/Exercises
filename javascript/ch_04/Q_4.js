"use strict";
function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keys_a = Object.keys(a);
  let keys_b = Object.keys(b);

  if (keys_a.length != keys_b.length) return false;

  for (let key of keys_a) {
    if (!keys_b.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}


console.log(deepEqual({val:1, x:2},{val:1, x:2}))
