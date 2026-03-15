let num = Number(prompt("Введіть перше число"))
let num1 = Number(prompt("Введіть друге число"))
let num2 = Number(prompt("Введіть третє число"))

let max = num
let min = num

if (num1 > max) {
    max = num1
}

if (num2 > max) {
    max = num2
}

if (num1 < min) {
    min = num1
}

if (num2 < min) {
    min = num2
}

console.log("Найбільше число:", max)
console.log("Найменше число:", min)

if (num % 2 === 0 || num1 % 2 === 0 || num2 % 2 === 0) {
    console.log("Хоча б одне число парне")
} else {
    console.log("Жодне число не є парним")
}

let result = false

if (num > num1 && num1 < num2) {
    result = true
}

console.log("Результат умови:", result)

let num3 = Number(prompt("Введіть число для перевірки"))

let check = true

if (num3 <= 1) {
    check = false
} else {

    for (let i = 2; i < num3; i++) {

        if (num3 % i === 0) {
            check = false
            break
        }

    }

}

if (check) {
    console.log(num3 + " є простим числом")
} else {
    console.log(num3 + " не є простим числом")
}