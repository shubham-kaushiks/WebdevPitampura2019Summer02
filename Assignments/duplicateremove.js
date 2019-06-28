var n = window.prompt("Enter size of the array");
var arr = [];
for(var i=0;i<n;i++)
{
  var x = window.prompt("");
  arr.push(x);
}

arr = arr.filter((item , index) => arr.indexOf(item)===index);
var xx = document.getElementById('id1');
xx.innerHTML = arr;
