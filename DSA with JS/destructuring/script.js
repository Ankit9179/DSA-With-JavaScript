// const arr = ["ram", , 3, 4];

// //descructuring => desructuring is like suppose you want to make a sendwich and you want to take everything from your refrigerator
// const [a, b = 500, c, d] = arr;
// console.log(b);

//
//nested array
let arr = ["ankit", 54, 22, [99, "ram"]];
//desructuring
let [a, b, c, [d, e]] = arr;
console.log(e);
