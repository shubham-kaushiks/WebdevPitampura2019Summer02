var n = window.prompt("Enter size of the array");
var arr = [];
for(var i=0;i<n;i++)
{
  var x = window.prompt("");
  arr.push(x);
}
var y = 0;
var t = '';
arr.forEach(function(item){
  let tt = item.length;
  if(tt>y)
  {
    y = tt;
    t = item;
  }
});
var xx = document.getElementById('id1');
xx.innerHTML = t;
