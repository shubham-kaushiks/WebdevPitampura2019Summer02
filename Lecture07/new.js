function Person(name, age)
{
  var abc = 3;
  this.name = name
  this.age = age
  this.isAdult = function()
  {
    if(this.Age > 18) return true
    else return false
  }
}
let p1 = new Person("Shubham", 22);
console.log(p1.abc)
