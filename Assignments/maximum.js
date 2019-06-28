var n = window.prompt("Enter size of the array");
var arr = [];
for(var i=0;i<n;i++)
{
  var x = window.prompt("");
  arr.push(x);
}
var arr2 = arr.reduce((acum, item) => {
  return Math.max(acum, item)
}, Number.MIN_VALUE);

var xx = document.getElementById('id1');
xx.innerHTML = arr2;
