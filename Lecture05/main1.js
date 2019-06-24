var n =  prompt("Enter number of primes to be generated :");

var arr = [];
for(var j=0;j<100000;j++)
{
  arr.push(0);
}
var s = "Primes are : ";
for (var p=2; p*p<=100000; p++)
{
        if (arr[p] == 0)
        {
            for (var i=p*p; i<=100000; i += p)
                arr[i] = 1;
        }
}
var count = 0;
for(var i=2;i<100000;i++)
{
  if(arr[i] == 0)
  {
    if(count == n)
    {
      var par = document.getElementById("prime");
      par.innerHTML = s;
    }
    s += i ;
    s += " " ;
    count =  count + 1;
  }
}
