/**
 * Example 3, Pag 46.
 * Calculate the compexity about the algoritm.
 * 
 * O(n^2)
 */

const printUnOrderedPairs = (data: number[][] = []) => {
  for (let i = 0; i < data.length; i++) {
    console.group(`row:${i}`);
    for (let j = i + 1; j < data.length; j++) {
      console.log(`(${i},${j})`);
    }
    console.groupEnd();
  }
};

const data = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
];

printUnOrderedPairs(data);
