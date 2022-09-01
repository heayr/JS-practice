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

let y = 1;

switch (typeof y) {
    case 'number':
        console.log('y - номер');
        break;
    case 'string':
        console.log('y - строка');
        break;
    case 'boolean':
        console.log('y - логический тип');
        break;
    case isNaN(y):
        console.log('y - тип не определён');
        break;
    default:
        console.log('y - тип не определён');
}

