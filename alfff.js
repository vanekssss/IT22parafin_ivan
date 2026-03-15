let num = parseFloat(prompt("Введіть число:"));
let num1 = parseFloat(prompt("Введіть число:"));
let num2 = parseFloat(prompt("Введіть число:"));

let avg = (num + num1 + num2) / 3;
console.log(avg);

console.log(Math.abs(num));
console.log(Math.ceil(num1));
console.log(Math.floor(num2));

let pownum = Math.pow(num, 2);
console.log(pownum);

if (pownum % 5 == 0) {
    console.log("Ділиться на 5");
} else {
    console.log("Не ділиться на 5");
}

if (num + num1 > num2 && num + num2 > num1 && num1 + num2 > num) {
    console.log("Трикутник існує");
} else {
    console.log("Трикутник не існує");
}