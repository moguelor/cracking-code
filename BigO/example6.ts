/**
 * Example 6, Pag 48.
 * Calculate the compexity about the algorithm.
 *
 * complexity = O(n/2) = O(n)
 */
const example6 = (arrayA: number[] = []) => {
  // O(n/2)
  for (let i = 0; i < arrayA.length / 2; i++) {
    let other: number = arrayA.length - i - 1;
    let temp: number = arrayA[i]
    arrayA[i] = arrayA[other];
    arrayA[other] = temp;
  }
  return arrayA;
};

const arrayA: number[] = [1, 2, 3, 4, 5];

console.log(example6(arrayA));
