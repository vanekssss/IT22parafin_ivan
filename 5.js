let randomNumber = Math.floor(Math.random() * 100) + 1;
let userNumber;

do {
    userNumber = Number(prompt("Вгадайте число від 1 до 100"));

    if (userNumber < randomNumber) {
        alert("Загадане число більше");
    } else if (userNumber > randomNumber) {
        alert("Загадане число менше");
    } else {
        alert("Вітаємо! Ви вгадали число!");
    }

} while (userNumber !== randomNumber);