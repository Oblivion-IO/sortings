/**
 * 
 * @param {number[]} A 
 * @param {number} p 
 * @param {number} q 
 * @param {number} r 
 */
function merge(A, p, q, r) {
  let nl = q - p + 1;
  let nr = r - q;
  let L = new Array(nl);
  let R = new Array(nr);

  for (let i = 0; i < nl; i++) L[i] = A[p + i];
  for (let j = 0; j < nr; j++) R[j] = A[q + j + 1];

  let i = 0, j = 0, k = p;

  while (i < nl && j < nr) {
    if (L[i] <= R[j]) A[k] = L[i++];
    else A[k] = R[j++];
    k++;
  }

  while (i < nl) A[k++] = L[i++];
  while (j < nr) A[k++] = R[j++];
  
  return A;
}

/**
 * 
 * @param {number[]} A 
 * @param {number} p 
 * @param {number} r 
 */
function merge_sort(A, p, r) {
  if (p >= r) return;

  let q = Math.floor((p + r) / 2);
  merge_sort(A, p, q);
  merge_sort(A, q + 1, r);
  merge(A, p, q, r);

  return A;
}

let A = [5, 2, 3, 1];

console.log(merge_sort(A, 0, A.length - 1));
