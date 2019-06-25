let food = {
  veg: true
}
let fruit = Object.create(food);
fruit.taste = "Sweet";


let mango = Object.create(fruit);
mango.color = "Yellow";


console.log(mango.color);
console.log(fruit.taste);
console.log(food.veg);
