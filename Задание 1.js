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