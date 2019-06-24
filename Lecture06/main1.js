function counter(init, delta)
{
  return function count()
  {
    init += delta;
    console.log(init);
  }
}

let c1 = counter(1, 2);
c1();
