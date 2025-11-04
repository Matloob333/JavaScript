console.log("hello");
setTimeout(function () {
  console.log("season 2");
}, 2000);
console.log("world");
/*callback function 
its structure is pyramid of dom 
not associate handler
less control
 */
const cart = ["Bag", "Shoes", "Pnat"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (PaymentInfo) {
    showOrderSammary(PaymentInfo, function () {
      updateWallet();
    });
  });
});
