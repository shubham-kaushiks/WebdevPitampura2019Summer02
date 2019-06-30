function f1()
{
  var x = document.getElementById('id1').value;
  var node = document.createElement("LI");
  var textnode = document.createTextNode(x);
  node.appendChild(textnode);
  document.getElementById("id2").appendChild(node);
  document.getElementById("id1").value = "";
}

document.getElementById('id2').addEventListener('click', function(){
  let xx = event.target;
  if(xx.style.textDecoration === "")
  {
    xx.style.textDecoration = 'line-through';
  }
  else
  {
    xx.style.textDecoration = '';
  }
})

document.getElementById('id3').addEventListener('click', function(){
  var itr = 0;
  var y = document.getElementById('id2');
  while(itr < y.childElementCount)
  {
    if (y.children[itr].style.textDecoration === 'line-through'){
            y.removeChild(y.children[itr])
        }
    else{
            itr++;
        }
  }
})
