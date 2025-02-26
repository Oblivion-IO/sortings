/**
 *
 * @param {number} i
 * @returns {number}
 */
function parent(i) {
  return Math.floor(i / 2);
}

/**
 *
 * @param {number} i
 * @returns {number}
 */
function left(i) {
  return 2 * i;
}

/**
 *
 * @param {number} i
 * @returns {number}
 */
function right(i) {
  return 2 * i + 1;
}

/**
 *
 * @param {number[]} A
 * @param {number} i
 * @param {number} heapSize
 */
function maxHeapify(A, i, heapSize) {
  let l = left(i);
  let r = right(i);
  let largest = i;

  if (l < heapSize && A[l] > A[i]) {
    largest = l;
  }

  if (r < heapSize && A[r] > A[largest]) {
    largest = r;
  }

  if (largest !== i) {
    [A[i], A[largest]] = [A[largest], A[i]];
    maxHeapify(A, largest, heapSize);
  }
}

/**
 *
 * @param {number[]} A
 */
function buildMaxHeap(A) {
  const heapSize = A.length;
  for (let i = Math.floor(A.length / 2); i >= 0; i--) {
    maxHeapify(A, i, heapSize);
  }
}

/**
 *
 * @param {number[]} A
 */
function heapSort(A) {
  buildMaxHeap(A);
  let n = A.length;
  for (i = n - 1; i >= 1; i--) {
    [A[0], A[i]] = [A[i], A[0]];
    maxHeapify(A, 0, --n);
  }
}

let A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
heapSort(A);
console.log(A);
