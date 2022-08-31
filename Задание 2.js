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