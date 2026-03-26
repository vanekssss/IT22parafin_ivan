let names = ["Mark", "Ivan", "Anna", "Oleg"];

let result = {};

for (let i = 0; i < names.length; i++) {
    let name = names[i];
    result[name] = name.length;
}

console.log(result);