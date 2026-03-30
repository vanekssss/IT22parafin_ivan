let input = document.getElementById("inputText");
let addBtn = document.getElementById("addBtn");
let sortBtn = document.getElementById("sortBtn");
let list = document.getElementById("list");

addBtn.onclick = function () {
    let value = input.value;

    if (value === "") return;

    let li = document.createElement("li");
    li.textContent = value;

    li.onclick = function () {
        this.remove();
    };

    list.appendChild(li);

    input.value = "";
};

sortBtn.onclick = function () {
    let items = list.getElementsByTagName("li");

    let arr = Array.from(items);

    arr.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    });

    list.innerHTML = "";

    arr.forEach(function (li) {
        list.appendChild(li);
    });
};