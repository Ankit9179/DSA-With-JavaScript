// in this video we will be lern closuer and lexical scope
// we can use variables before run the function and can reuse variable value so called closure
// and this scope is call lexical scope

// let sum = function (a) {
//   let c = 5;
//   console.log(a);
//   return function (b) {
//     return a + b + c;
//   };
// };

// let res = sum(4);
// console.log(res(9));

//let's see another functtion

let sum = function (a, b, c) {
  return {
    someOfTow: function () {
      return a + b;
    },
    someOfThree: function () {
      return a + b + c;
    },
  };
};

let res = sum(4, 5, 6); //calling
console.log(res.someOfTow());
console.log(res.someOfThree());
