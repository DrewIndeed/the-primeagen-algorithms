/*
- NOTICE something, remember this:
  n th number of loop = number of elements that have been sorted (at the end of the array in this ascending case)
*/

/*
- NOTICE from above saying that we have to ignore that elements that have been sorted at the end of the array each iteration and the hint is the sum of those element equals to n th iterator OR the i value at MARK 1 (0 is counted as 0 th iteration). So:
    - MARK 1 or loop 1 represents the nth number iteration, [0, n-1], n is the arr length
    - MARK 2 or loop 2 represents the swapping process that is applied on the portion that has ignored that sorted elements, [0, n - 1 - # of sorted element aka iter value of MARK 1]
*/
export default function bubble_sort(arr: number[]): number[] {
  // MARK 1 i.e.: for (let i = 0; i <= arr.length - 1; ++i)
  for (let i = 0; i < arr.length; ++i) {
    // MARK 2 i.e.: for (let j = 0; j <= arr.length - i; ++j)
    for (let j = 0; j < arr.length -1 - i; ++j) {
       if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
       }
    }
  }

  return arr;
}
