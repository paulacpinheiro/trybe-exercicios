let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addNew(object, key, value) {
    object[key] = 'noite';
};
addNew(lesson2, 'turno', 'noite')
//console.log(lesson2)

function keys(object) {
    return Object.keys(object);
}
//console.log(keys(lesson1))

function size(object) {
    return Object.keys(object).length;
}
//console.log(size(lesson1))

function valores(object) {
    return Object.values(object);
}
//console.log(Object.values(lesson1));

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
},
);
//console.log(allLessons)

function sumStudents(object) {
    let total = 0;
    let keys = Object.keys(object);
    for (let index in keys) {
        total += object[keys[index]].numeroEstudantes;
    }
    return total;
}
//console.log(sumStudents(allLessons))

function getValueByName(object, value) {
    return Object.values(object)[value];
}
//console.log(getValueByName(lesson1, 2))

function verification(object, key, value) {
    let entries = Object.entries(object);
    let equal = false;
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) 
        equal = true;
    }
    return equal;
}


console.log(verification(lesson1, 'materia', 'Matemática'))