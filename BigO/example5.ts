/**
 * Example 5, Pag 48.
 * Calculate the compexity about the algorithm.
 *
 * complexity = A * B * 1 = O(AB)
 */
const example5 = (arrayA: number[] = [], arrayB: number[] = []) => {
  // O(A)  
  for (let i = 0; i < arrayA.length; i++) {
    // O(B)  
    for (let j = 0; j < arrayB.length; j++) {
      // O(1)  
      for (let k = 0; k < 100000; k++) {
        if (arrayA[i] < arrayB[j]) {
          console.log(`(${i},${j})`);
        }
      }
    }
    console.log("=====");
  }
};

const arrayA: number[] = [1, 2, 3, 4, 5];
const arrayB: number[] = [1, 2, 3, 4, 5];

example5(arrayA, arrayB);
