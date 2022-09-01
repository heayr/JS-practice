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
