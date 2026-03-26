let users = [
    { name: "Світлана ", age: 16 },
    { name: "Іван", age: 22 },
    { name: "Влада", age: 19 },
    { name: "Богдан", age: 15 },
    { name: "Анна", age: 25 }
];

let www = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        www.push(users[i]);
    }
}

let names = [];
for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
}

let sum = 0;
for (let i = 0; i < users.length; i++) {
    sum = sum + users[i].age;
}

let average = sum / users.length;

console.log(www);
console.log(names);
console.log(average);