function download(url, callback)
{
  let file = "Some Data";
  setTimeout(() => {
    callback(new Error("Some Error"),file);
  }, 3000)
}

download('url',(err,file) => {
  if(err) return;
  resize(file, resizedfile => {
    upload(resizedfile, url => {
      console.log(url);
    })
  })
