var arr = [{
  name:'Divyansh',
  github_id:'silent-lad'
},{
  name:'Abhishek',
  github_id:'abhishek97'
},{
  name:'Dhruv',
  github_id:'imdhruvgupta'
}];

var newarr = [];

arr.forEach(function (item) {
    var x = item.github_id;
    newarr.push(x);
});

var xx = document.getElementById('id1');
xx.innerHTML = newarr;
