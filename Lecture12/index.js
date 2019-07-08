const app = require('express')();
const hbs = require('hbs');
const path = require('path')

app.get('/', (req, res) => {
  res.render('index.hbs', {
    name: 'shubham',
    //showname: true
    description: 'I explain with words and code.'
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    name: 'shubham'
  })
})

app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, '/partial'));

app.listen(3000, function(){
  console.log("Running on 3000")
});


//{{>navbar name=xx}}
//{{>navbar obj}}
// app.get('/about', (req, res) => {
//   res.render('about.hbs', {
//     name: 'shubham',
      // obj: {
      //   name: kaushik
      // }
//   })
// })



//{{{}}} for rendering html

// {{#if showname}}
//   Hello {{name}}
// {{else}}
//   Hello XYZ
// {{/if}}
