function merge(left, right) {
  let mergedArr = [];

  // Sorts and merges both left and right arrays
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      mergedArr.push(left[0]);
      left.shift();
    } else {
      mergedArr.push(right[0]);
      right.shift();
    }
  }

  if (left.length === 0 && right.length !== 0) {
    mergedArr = mergedArr.concat(right);
  } else if (left.length !== 0 && right.length === 0) {
    mergedArr = mergedArr.concat(left);
  }

  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  // Divide array in half
  const mid = arr.length / 2;

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively divide left array, and right array then merge
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([9, 3, 7, 5, 6, 4, 8, 2]));
console.log(mergeSort([5, 5, 9, 4, 10, 1]));
