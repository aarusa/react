// optional_chaining
// when returning the value, if the value is undefined, return undefined instead of error
const user = {
    name: 'Brad'
};

// generates error
// console.log(user.address.city)

// use optional chaining
// console.log(user.address?.city)

// optional chaining + coalescing operator
console.log(user.addres?.city ?? 'Default value');

// nullish coalescing operator ?? : defining default value when the value is null or undefined
let value = null;
let result = value ?? 'Default value';

// console.log(result);