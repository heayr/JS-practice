console.log('hi');
// <<<<<<<<<<<     promt    >>>>>>>>>>>>

const inputValue = +prompt('Введите значение');

if (typeof inputValue == 'number' && !isNaN(inputValue)) {
    if (inputValue == 0) {
        alert('Равно нулю')
    } else if (inputValue % 2 == 0) {
        alert('Чётное')
    } else {
        alert('Нечетное')
    }
} else {
    alert('Упс, кажется, вы ошиблись');
}

// <<<<<<<<<<    тип переменной Х     >>>>>>>>>>>>>
let x = 1;

if (typeof x == isNaN && isFinite && undefined && null && BigInt && Symbol && Function) {
} else if (typeof x == 'number') {
    console.log('х - номер')
} else if (typeof x == 'string') {
    console.log('х - строка');
} else if (typeof x == 'boolean') {
    console.log('х - логический тип');
} else {
    console.log('x - тип не определён');
};

const numberY = 'number';
const stringY = 'string';
const booleanY = 'boolean';
let y = NaN;

switch (y) {
    case numberY:
        console.log('х - номер');
        break;
    case stringY:
        console.log('х - строка');
        break;
    case booleanY:
        console.log('х - логический тип');
        break;
    default:
        console.log('x - тип не определён');
}

// <<<<<<<<<<<   отразить string   >>>>>>>>>>>>>>>
const str = 'Hello';
const reversed = str.split('').reverse().join('');
console.log(reversed);

// <<<<<<<<<< Math.random[0, 100] >>>>>>>>>>
let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

const arr = [1, 5, 10, 50, 7];
console.log('Длинна массива:' + ' ' + arr.length);
// 
const result = arr.map(function (item, index, array) {
    return item + 1

});
console.log('Пересобранный Массив:' + ' ' + result);
result.forEach((el) => { console.log('Элемент массива отдельно:' + ' ' + el) });


// одинаковы ли элементы в массиве?

const arrEqual = [1, '1', 1, 1, 'dfg'];

for (let i = 0; i < arrEqual.length; i++) {
    for (let x = 0; x < arrEqual.length; x++) {
        if (arrEqual[i] == arrEqual[x]) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
};
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.

const arr3 = [0, 1, 2, null, 'four', 'ef', 2, 0, 2, 1, 'notNumber'];

let oddNumbers = 0;
let evenNumbers = 0;
let zero = 0;
let other = 0;

for (let i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === 'number') {
    } if (arr3[i] === 0) {
        zero++;
    } else if (arr3[i] % 2 === 0) {
        evenNumbers++;
    } else if (arr3[i] % 1 === 0) {
        oddNumbers++;
    } if (typeof arr3[i] != 'number') {
        other++;

    }
}

console.log(`Кол-во Нулей: ${zero}`);
console.log(`Кол-во чётных: ${evenNumbers}`);
console.log(`Кол-во нечётных: ${oddNumbers}`);
console.log(`Не число: ${other}`);

// 
let map = new Map();

map.set(1, '1_value')
    .set('string', '2_value')
    .set(true, '3_value_bool');

map.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

