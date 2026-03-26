let products = [
    { name: "Баклажан", category: "Фрукти" },
    { name: "Банан", category: "Фрукти" },
    { name: "Булка", category: "Випічка" },
    { name: "Спрайт", category: "Напої" },
    { name: "Кефір", category: "Молочні продукти" },
    { name: "Круасан", category: "Випічка" }
];

let grouped = {};

for (let i = 0; i < products.length; i++) {
    let cat = products[i].category;
    if (!grouped[cat]) {
        grouped[cat] = [];
    }
    grouped[cat].push(products[i].name);
}

for (let category in grouped) {
    console.log(category + ": " + grouped[category].join(", "));
}