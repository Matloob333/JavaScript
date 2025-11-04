/*A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

A Promise can be in one of three states:

Pending: The initial state, where the operation has not completed yet.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
The basic syntax for creating a promise is:

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  if ( operation successful ) {
    resolve('Success');
  } else {
    reject('Error');
  }
});
Once a promise is created, it can be used with .then(), .catch(), and .finally() methods to handle the fulfilled or rejected state.

Promises provide a clean and straightforward way to handle errors in asynchronous programming. The .catch() method is used to handle any errors that occur in the promise chain.

Some advanced features of Promises include:

Promise.all(): Runs multiple promises in parallel and waits for all of them to complete.
Promise.race(): Resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
Promise.allSettled(): Returns a promise that resolves after all of the given promises have either resolved or rejected.
Promise.any(): Returns a single promise that resolves with the value from the first promise that fulfills.
Promises are widely used in real-world applications, such as fetching data from an API or wrapping callback-based functions into promises for a cleaner API usage.

Promises can also be used with async/await syntax, which provides a more straightforward way to work with asynchronous operations, making the code cleaner and easier to understand.
*/

//using callback function here pasing a funtion to another funtion
const cart = ["Bag", "Shoes", "Pnat"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (PaymentInfo) {
    showOrderSammary(PaymentInfo, function () {
      updateWallet();
    });
  });
});

/*using Promise to improve
1 remove pyramid of dom structure
2. improve cotrolbility of code execution
3. errorhandling
4. readility
5. here using function chainig methed
*/

const myPromise = createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (PaymentInfo) {
    return showOrderSammary(PaymentInfo);
  })
  .then(function (PaymentInfo) {
    return updateWallet(PaymentInfo);
  })
  .catch((err) => {
    console.error(err);
  });
myPromise(cart);
/*using Promise to improve using arrow funntion 
1 remove pyramid of dom structure
2. improve cotrolbility of code execution
3. errorhandling
4. readility
5. here using function chainig methed
6. short line code 
*/

const myPromise1 = createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((PaymentInfo) => showOrderSammary(PaymentInfo))
  .then((PaymentInfo) => updateWallet(PaymentInfo))
  .catch((err) => console.error(err));
myPromise1(cart);
