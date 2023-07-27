let arr = [1, 2, 3, -2, 5, 6]; // input
//the some zero element [3,-3] output

for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == 0) {
      console.log(`the index is ${arr[i]},${arr[j]}`);
    }
  }
}
