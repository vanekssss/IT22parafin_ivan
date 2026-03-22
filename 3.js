let n = Number(prompt("Введіть число"))

let i = 1
let factorial = 1

while (i <= n) {
    factorial = factorial * i
    i++
}

console.log("Факторіал числа:", factorial)