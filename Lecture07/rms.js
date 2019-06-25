let arr = [6, 2, 9, 4, 5];
arr.sort();
arr = Math.sqrt(arr.map((item) => item*item).reduce((acum, item) => {
  return acum+item
})/arr.length);
console.log(arr);
