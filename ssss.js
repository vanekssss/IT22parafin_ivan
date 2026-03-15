let name = prompt("Введіть ваше ім'я")
let num = Number(prompt("Введіть рік народження"))
let city = prompt("Введіть місто проживання")

let currentYear = 2026
let age = currentYear - num

console.log("Ім'я:", name)
console.log("Вік:", age)
console.log("Місто:", city)

if (age < 13) {
    console.log("Ви дитина")
}
else if (age >= 13 && age < 18) {
    console.log("Ви підліток")
}
else if (age >= 18 && age < 60) {
    console.log("Ви дорослий")
}
else {
    console.log("Ви літня людина")
}

let capital = "Київ"

if (city === capital) {
    console.log("Ви живете у столиці країни")
}
else {
    console.log("Ви живете не у столиці")
}