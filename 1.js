let usersBlock = document.getElementById("usersBlock");
let errorBlock = document.getElementById("errorBlock");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("error");
        }
        return response.json();
    })
    .then(function (users) {
        users.forEach(function (user) {
            let li = document.createElement("li");
            li.textContent = user.name + " - " + user.email;
            usersBlock.appendChild(li);
        });
    })
    .catch(function () {
        errorBlock.textContent = "Помилка завантаження";
    });