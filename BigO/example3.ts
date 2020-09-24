/**
 * Example 3, Pag 46.
 * Calculate the compexity about the algorithm.
 * 
 * complexity = n * (n/2) = O(n^2/2) = O(n^2)
 */
const printUnOrderedPairs = (data: number[][] = []) => {
  // The complexity of first loop is O(n).
  for (let i = 0; i < data.length; i++) { 
    console.group(`row:${i}`);
  
    // The complexity of inner loop will be O(n/2) 
    // because only half array will be print like:
    // (0,1)(0,2)(0,3)(0,4)
    //      (1,2)(1,3)(1,4)
    //           (2,3)(2,4)
    //                (2,4) 
    for (let j = i + 1; j < data.length; j++) { 
      console.log(`(${i},${j})`);
    }
    console.groupEnd();
  }
};

const data = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];

printUnOrderedPairs(data);
