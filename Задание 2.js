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
let y = '2';

switch (typeof y) {
    case 'number':
        console.log('х - номер');
        break;
    case 'string':
        console.log('х - строка');
        break;
    case 'boolean':
        console.log('х - логический тип');
        break;
    default:
        console.log('x - тип не определён');
}
let value = '2';

function detectType(value) {
    switch (typeof value) {
        case 'string':
            return "str";
        case 'number':
            return "num";
        default:
            return "other";
    }
}
