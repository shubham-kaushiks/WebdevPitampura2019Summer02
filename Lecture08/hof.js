function generatepromise(val, n)
{
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, n*1000);
  })
  return promise;
}

const p1 = generatepromise(2, 4);
p1.then(console.log);

//const generatepromise = val => n => new Promise((resolve) => setTimeout(() => resolve(val),n)))
//generatepromise(3)(4) currying
