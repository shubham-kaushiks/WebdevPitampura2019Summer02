let arr = [1, 2, 9, 4, 5];
arr.sort();
// default : lexicographical
let arr1 = arr.map(item => item += 10);


let arr2 = arr.reduce((acum, item) => {
  return acum+item
})


function odd(num)
{
  if(num%2 == 0) return true;
  else return false;
}

arr3 = arr.filter(odd);

console.log(arr3)
