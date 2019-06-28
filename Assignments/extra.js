function map(arr, fn) {
    return arr.reduce(function (prev, current) {
        return prev.concat(fn(current));
    }, []);


function filter(array, test) {
      return reduce(array, function(arr, el) {
        // Only add to the array if the test function is true
        if (test(el)) {
          arr.push(el);
        }
        // Always return the same array so you can keep filling it
        return arr;
      }, []); // Give it an empty array to start with
    }
var items = [2, 1, 3];
var b = items.reduce((result, item) => {
      return result.push(item+=2);
    }, [])

    var xx = document.getElementById('id1');
    xx.innerHTML = b;
