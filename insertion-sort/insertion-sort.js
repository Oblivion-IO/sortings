/**
 *
 * @param {number[]} arr
 * @param {number} n
 */
function insertion_sort(arr, n) {
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

let arr = [5, 2, 4, 6, 1, 3];

console.log(insertion_sort(arr, arr.length));
