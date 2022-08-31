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
let x = '';

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

// <<<<<<<<<<<   отразить string   >>>>>>>>>>>>>>>
const str = 'Hello';
const reversed = str.split('').reverse().join('');
console.log(reversed);

// <<<<<<<<<< Math.random[0, 100] >>>>>>>>>>

let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

const arr = [1, 5, 10, 50, 7];
console.log('Длинна массива:' + ' ' + arr.length);

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