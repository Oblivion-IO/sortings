

/**
 * count_sort() - Sorts given array by digits
 * @param {number[]} arr
 * @param {number} exp
 * @returns {number[]}
 */
function count_sort(arr, exp) {
  const n = arr.length;
  let output = Array(n);
  let count = Array(10).fill(0, 0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

/**
 * Radix Sort
 * @param {number[]} arr 
 * @returns {number[]}
 */
function radix_sort(arr) {
  const maxNum = Math.max(...arr);
  for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
    arr = count_sort(arr, exp);
  }
  return arr;
}

const arr = [170, 45, 75, 90, 802, 24, 2, 66];

console.time('radix')
console.log(radix_sort(arr));
console.timeEnd('radix');

