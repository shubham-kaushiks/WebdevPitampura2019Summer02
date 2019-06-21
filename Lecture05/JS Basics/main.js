console.log("Hello World");

// number string boolean object(array) null undefined
// number.MAX_SAFE_INTEGER --for everyone
// number.MAX_VALUE --specific to machine

// object in js are key value pairs
//key is unique and string
 var obj = {
   name: "Shubham",
   nested: {
     object: "Shubham Kaushik"
   }
 }

console.log(obj["name"]);
console.log(obj.nested.object);
delete obj.name
console.log(obj["name"]);
console.log(isNaN(2.0/"ab"));

obj.toString = "Hello";
console.log(obj.toString);

// string methods return new string
// string are immutable
//[]+{}
//{}+[] first is considered block with no statemtenst, plus is treted as unary plus

//typeof y == "undefined"

var name = "Shubham.Kaushik";
console.log(name.split("."));
console.log(name.split(".")[0]);
console.log(name.substring(0, 5));
console.log(name.substr(0, 5));
console.log(name.substring(9, -1));

var arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[2]);

//js hoisting
var yy = function () {
  // these are two lines
  // var yy;
  // yy = function() that's why not hoisted on the top
}
function f1(i, onDone) {
  //var j;
  var jj = ""
  for(j=0;j<=i;j++)
  {
    jj += j;
    console.log(j);
  }
  onDone(jj);
}
f1(4, function(str){
  window.alert(str)} );




// map, reduce, filter
// fn to remove duplicates
// prime number generator
// DOM api
