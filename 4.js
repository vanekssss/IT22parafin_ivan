let a = Number(prompt("Введіть перше число"))
let b = Number(prompt("Введіть друге число"))
let operation = prompt("Введіть операцію (+, -, *, /)")

let result

switch (operation) {
    case "+":
        result = a + b
        break

    case "-":
        result = a - b
        break

    case "*":
        result = a * b
        break

    case "/":
        if (b === 0) {
            alert("Ділити на 0 не можна!")
            result = null
        } else {
            result = a / b
        }
        break

    default:
        alert("Невідома операція")
        result = null
}
alert("Результат: " + result)