function f1(){
var x = 50;
var xx = document.getElementById('p1');
var id = setInterval(() => {
  xx.innerHTML = x--;
}, 1000);
setTimeout(() => {
  clearInterval(id);
  window.alert("Timer finished!")
}, 50000);
}
//const start = Date.now()
//setInterval(() => {
//  const shown = Date.now() - start;
//}, 1000);
