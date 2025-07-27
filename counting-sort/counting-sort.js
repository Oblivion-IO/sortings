

/**
 * counting_sort()
 * @param {number[]} input 
 */
function counting_sort(input) {
  let maxNum = Math.max(...input);

  const output = Array(input.length);
  const count = Array(maxNum + 1).fill(0);

  // count the freq
  for (const num of input) count[num]++;

  // cumulative freq, indicates the indexes where the number should be
  for (let i = 1; i <= maxNum; i++) {
    count[i] += count[i - 1];
  }

  // putting the numbers in their correct index from the behind
  for (let i = input.length - 1; i >= 0; i--) {
    output[count[input[i]] - 1] = input[i];
    count[input[i]]--;
  }

  return output;
}

const input = [2, 5, 3, 0, 2, 3, 0, 3];
console.log(counting_sort(input))

