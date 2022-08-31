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