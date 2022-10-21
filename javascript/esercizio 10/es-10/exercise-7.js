function sumUntil(maxValue) {
  // ...
  let somma=0;
  for (let i = 1; i <= maxValue; i++) {
    somma=somma+i
  }
  return somma
}

console.log(sumUntil(5));