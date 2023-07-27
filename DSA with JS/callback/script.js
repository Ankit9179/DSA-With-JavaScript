/// callback function => a function which is called inside the function as a argument let's see i am going to create a fat arrow function
//here we can see also hoisting
const second = () => {
  console.log("rahi is ny last name");
};

const geet = (name, callback) => {
  console.log(`my first name is ${name}`);
  callback();
};

geet("ankit", second);
