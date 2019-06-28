// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Some Data");
//   }, 200)
// });
//
//
// p1.then(file => console.log(file));

function resize(file) {
  const promise =  new Promise((resolve) => {
    setTimeout(()=>{
      resolve("resizedfile")
    }, 2000)
  })
  return promise;
}

const resizefilepromise = resize("Some Data");
resizefilepromise.then(resizedfile => console.log(resizedfile));

const downloadedfile = download('adad.com');
downloadedfile.then(file => {
  return resize(file);
}).then(resizefile => {
  return upload(resizefile)
}).then(url => {
  console.log(url);
}).catch(err => {
console.log("New Error");
// throw new Error("err");
})

// saccha promise p1.catch(() => {})
