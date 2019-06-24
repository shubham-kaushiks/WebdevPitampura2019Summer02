
function fizbuzz()
{
  let start = new Date().getTime();
  var s = "";
  var n = document.getElementById('n1').value;
  for(var i=1;i<=n;i++)
  {
    if (i % 15 == 0)
    {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("Fizzbuzz");
      node.appendChild(textnode);
      document.getElementById("p1").appendChild(node);
      // document.getElementById("p1").innerHTML += `<li>${i}</li>`;
    }
    else if(i%3 == 0)
    {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("Fizz");
      node.appendChild(textnode);
      document.getElementById("p1").appendChild(node);
    }
    else if(i%5 == 0)
    {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("Buzz");
      node.appendChild(textnode);
      document.getElementById("p1").appendChild(node);
    }
    else
    {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(i);
      node.appendChild(textnode);
      document.getElementById("p1").appendChild(node);
    }
  }
  let end = new Date().getTime();

  document.getElementById("id1").innerHTML = (end-start);

}
//l.setAttribute('href', 'https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/');
