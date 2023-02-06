let arr = [1, 2, 3, 4, 5];
function filterPolyFill(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
function greaterThanTwo(x) {
  if (x > 2) {
    return x;
  }
}
console.log(filterPolyFill(arr, greaterThanTwo));