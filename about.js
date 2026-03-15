let num = 10;
let num1 = 5.5;
let num2 = "mmmmmm";
let num3 = true;

console.log(typeof num);
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

num = "20";
num1 = 7;
num2 = 100;
num3 = false;

console.log(typeof num);
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

let num4 = num + num2;
console.log(num4);

let num5 = Number(true);
let num6 = Number(false);

console.log(num5);
console.log(num6);

let num7 = {
    name: "Ivan",
    age: 16,
    height: 1.7,
    student: true
};

console.log(JSON.stringify(num7));