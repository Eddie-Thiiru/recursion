function sortArrays(one, two) {
  const mergedArrays = one.concat(two);
  const sortedArr = mergedArrays.sort((a, b) => a - b);

  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let middleIndex = arr.length / 2;
    let leftCopy = arr.slice(0, middleIndex);
    let rightCopy = arr.slice(middleIndex, arr.length);

    mergeSort(leftCopy);
    mergeSort(rightCopy);

    return sortArrays(leftCopy, rightCopy);
  }
}

console.log(mergeSort([9, 3, 7, 5, 6, 4, 8, 2]));
console.log(mergeSort([5, 5, 9, 4, 10, 1]));
