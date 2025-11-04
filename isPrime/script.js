const arr = [15, 17];
const primeArr = [];

for (let j = 0; j < arr.length; j++) {
  console.log("iteration here-------", j);
  let num = arr[("value of j:", j)];
  console.log("value of num", num);
  let isPrime = true;
  console.log("Print Flag", isPrime);

  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < num; i++) {
      console.log("value of num:", num, "valueof i:", i);
      console.log("value num % i: ", num % i);
      if (num % i === 0) {
        isPrime = false;
        console.log("Print Flag", isPrime);
        break;
      }
    }
  }

  if (isPrime) {
    primeArr.push(num);
    console.log("Array after push :", primeArr);
  }
}

console.log("Prime Numbers:", primeArr);
{
  function noname(n) {
    return n == 1 ? 1 : n(n - 1);
  }
  noname(5);
}
