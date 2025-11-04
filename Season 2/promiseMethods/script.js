// Promises Methods
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p2 Success"), 1000);
  setTimeout(() => reject("p2 fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 Success"), 2000);
});

//promise.all  (fail fast )when one promise is reject ther ASA throw an error messege

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

// wait for all promises and return an array of promises that have all
//resolve and reject promises
Promise.allSettled([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

// return only first settled Promise not matter resolve or reject
Promise.race([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

//return result settled resolve Promise
Promise.any([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
