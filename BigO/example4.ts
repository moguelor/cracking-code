/**
 * Example 4, Pag 47.
 * Calculate the compexity about the algorithm.
 *
 * complexity = A * B = O(A * B)
 */
const example4 = (arrayA: number[] = [], arrayB: number[] = []) => {
  // O(A) <-- Because are differents arrays.
  for (let i = 0; i < arrayA.length; i++) {
    // O(B) <-- Because are differents arrays.
    for (let j = 0; j < arrayB.length; j++) {
      // O(1)
      if (arrayA[i] < arrayB[j]){
        console.log(`(${i},${j})`);
      } 
    }
    console.log("=====");
  }
};

const arrayA: number[] = [1, 2, 3, 4, 5];
const arrayB: number[] = [1, 2, 3, 4, 5];

example4(arrayA, arrayB);
