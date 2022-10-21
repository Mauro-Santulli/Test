function memoize(fn) {
  let cache = [];
  return function (x) {
    if (cache.includes(x)) {
      console.log(`Fetching from cache for ${x}`);
      return fn(x) 
    } else {
      cache.push(x)
      console.log( `Calculating result for ${x}`);
      return fn(x)
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));
console.log(factory(5));