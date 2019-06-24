var n = prompt("Enter size of the array");
var arr = [];
for(var i=0;i<n;i++)
{
  arr.push(prompt(""));
}

function getUnique(array){
        var uniqueArray = [];
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }

var arr1 = [];
arr1 = getUnique(arr);
var par = document.getElementById("duplicates");
par.innerHTML = arr1;
