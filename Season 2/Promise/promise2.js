const cart = ["shoes", "shirt", "pant"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    proceedToPayment(orderId);
    return orderId;
  })

  .then(function (orderId) {
    updateWallet(orderId);
    return updateWallet;
  })
  .catch(function (err) {
    console.log(err);
  });

function updateWallet(orderId) {
  const pr = new Promise(function (resolve, reject) {
    if (resolve) {
      console.log("Wallet updated");
    }
  });
  return pr;
}

// Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validatecart
    //orderId
    if (!validatecart(cart)) {
      const err = new Error("cart is not Valid");
    }
    //logic for createOrder
    const orderId = "123456";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function validatecart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  const pr = new Promise(function (resolve, reject) {
    if (resolve) {
      console.log("payment successful");
    }
  });
  return pr;
}

let prom = new Promise(function (resolve, reject) {
  try {
    setTimeout(() => {
      let obj = {
        name: "shahid",
      };
      console.log();
      resolve(obj);
    }, 5000);
    let res = fetch("");
    resolve(res);
  } catch (error) {
    reject(error);
  }
});

// prom.then(val).catch();
// prom = {
//     "then" : function(val){console.log(val);return val}, //resolve
//     'catch': function(err){console.log(err);return err}, //reject
//     'finally':function(val){} //final
// }

// fetch data from URL

fetch("https://api.github.com/users/Matloob333/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log("All Repositories:");
    console.log(data); //  This will print the entire array of repos

    // Loop through each repo and print specific details
    data.forEach((repo) => {
      console.log("Name:", repo.name);
    });
  })
  .catch((error) => {
    console.error(" Error fetching data:", error);
  });

let p = prom;
let fetch = () => {
  let b = p;
  return b;
};
