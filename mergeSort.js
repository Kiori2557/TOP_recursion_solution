function mergeSort(data, start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(data, start, mid);
    mergeSort(data, mid + 1, end);
    merge(data, start, mid, end);
  }
  return data;
}
function merge(data, start, mid, end) {
  let tempArr = [];
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (data[i] < data[j]) {
      tempArr[k++] = data[i++];
    } else {
      tempArr[k++] = data[j++];
    }
  }
  while (i <= mid) {
    tempArr[k++] = data[i++];
  }
  while (j <= end) {
    tempArr[k++] = data[j++];
  }
  for (let i = start; i <= end; i++) {
    data[i] = tempArr[i - start];
  }
}
let data = [954, 923, 850, 928, 465, 43, 143, 332];
console.log(mergeSort(data, 0, data.length - 1));
