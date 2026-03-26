let students = {
    Mark: {
        math: 12,
        physics: 12,
        english: 12
    },
    Ivan: {
        math: 11,
        physics: 12,
        english: 12
    },
    Anna: {
        math: 10,
        physics: 11,
        english: 9
    }
};

for (let name in students) {
    let subjects = students[name];
    let sum = 0;
    let count = 0;

    for (let subject in subjects) {
        sum = sum + subjects[subject];
        count++;
    }

    let average = sum / count;

    console.log(name + ": середній бал = " + average);
}