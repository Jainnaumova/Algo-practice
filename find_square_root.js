// Given a real number n, find the square root of n. For example, given n = 9, return 3.

// 1 Start with an arbitrary positive start value x (the closer to the
//    root, the better).
// 2 Initialize y = 1.
// 3. Do following until desired approximation is achieved.
//   a) Get the next approximation for root using average of root and y
//   b) Set y = n/root
const findSquareRoot = num => {
// Edge case avoid dividing by 0;
  if (num === 0) return 0;
   /*We are using num itself as initial approximation This can definitely be improved */
  let root = num;
  let y = 1;

  // e decide the accuracy level
  let e = 0.1;
  while(root - y > e) {
    root = (root + y) / 2;
    y = num / root;
  }
  return root;
}

findSquareRoot(9) // return 3.023529411764706  Big O (n square root);

// / n = 4 /*n itself is used for initial approximation*/
// Initialize root = 4, y = 1
// Next Approximation root = (root + y)/2 (= 2.500000),
// y = n/root  (=1.600000)
// Next Approximation root = 2.050000,
// y = 1.951220
// Next Approximation root = 2.000610,
// y = 1.999390
// Next Approximation root = 2.000000,
// y = 2.000000
// Terminate as (root - y) > e now.
