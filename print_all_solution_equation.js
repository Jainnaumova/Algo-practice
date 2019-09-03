// Print all positive solution to the equation a3 + b3 = c3 + d3, where a,b,c,d are integers between 1 and 10.

const findPairsIntegers = (n) => {
  let newMap = new Map();

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      result = a*a*a + b*b*b;
      newMap.set(result, { a, b });

    }
  }
  for (let c = 1; c <= n; c++) {
    for (let d = 1; d<= n; d++) {
      result = c*c*c + d*d*d;
      let list = newMap.get(result);
      list.c = c;
      list.d = d;
      console.log(list)
    }
  }
}

findPairsIntegers(10)
// runtime O (n*n)
