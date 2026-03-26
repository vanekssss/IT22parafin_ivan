let numbers = [5, 2, 9, 1, 7, 3];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

let average = sum / numbers.length;

let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

numbers.sort(function (a, b) {
    return a - b;
});

console.log(numbers);
console.log(average);
console.log(min);
console.log(max);