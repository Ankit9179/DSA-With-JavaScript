// let arr = [2, 9, 4, 7, 1, 3, 8, 5, 6];

// arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr);

// let arr = [2, 9, 4, 7, 1, 3, 8, 5, 6];
// let le = arr.length;
// let narr = [];
// for (let i = 0; i < le; i++) {
//   for (let j = i + 1; j < le; j++) {
//     let x = 0;
//     if (arr[i] > arr[j]) {
//       x = arr[i]; //insert element of arry in variable then
//       arr[i] = arr[j]; //replace elemennt of array
//       arr[j] = x;
//     }
//   }
//   narr.push(arr[i]);
// }
// console.log(narr);

/////////
// let arr = [59, 33, 2, 9, 47, 3, 70, 67, 89, 88];
// let le = arr.length;
// let nArr = [];

// for (let i = 0; i < le; i++) {
//   for (let j = i + 1; j < le; j++) {
//     let x = 0;
//     if (arr[i] > arr[j]) {
//       x = arr[i];
//       arr[i] = arr[j];
//       arr[j] = x;
//     }
//   }
//   nArr.push(arr[i]);
// }
// console.log(nArr);

let n = 3;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
