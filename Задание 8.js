// map
let map = new Map();

map.set(1, '1_value')
    .set('string', '2_value')
    .set(true, '3_value_bool');

map.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});