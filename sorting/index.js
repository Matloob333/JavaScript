const arr = [3, 2, 5, 6, 4];

for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] < arr[j - 1]) {
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
}

console.log(arr); // Output: [2, 3, 4, 5, 6]
