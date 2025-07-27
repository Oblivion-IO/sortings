
function bubble_sort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return arr;
}

const arr = [5, 6, 1, 3, 2, 5, 10, 9, 20];

console.log(bubble_sort(arr));

