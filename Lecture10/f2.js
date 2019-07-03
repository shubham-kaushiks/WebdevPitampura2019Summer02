// const obj = require('./f1.js');
// console.log(obj);

const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if(err) return console.log(err)

    const temp = data.split('\r\n')
    .filter((el) => !isNaN(el))
    .map(el => +el)
    .reduce((acc, item) => acc+item, 0)
    
    fs.writeFile('./output.txt', temp, (err) => {
        if(err) return console.log(err)
        
        console.log("Done")
    })
})


