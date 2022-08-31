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

