function testAll (array, tester, every) {
    let pass = false,
    i = 0,
    len = array.length;
    console.log(`проверка длины: ${i < len}`)
    every = every === undefined ? true : every;
    while (i < len) {
        var el = array[i];
        var result = tester(el, i, array);

        if (every) {
            if (!result) {
                return result;
            }
            pass = true;
            
        }
        // if any elements meet the requirements
        if (!every) {
            if (result) {
                return result;
            }
        }
        i++;
    }
    return pass;
};
 
function isNum (el, i, array) {
    return typeof el === 'number';
};
 
let arr1 = [1, 2, 'c'];
console.log(testAll(arr1, isNum, true)); // false
console.log(testAll(arr1, isNum, false)); // true
 
let arr2 = [1, 2, 3];
console.log(testAll(arr2, isNum, true)); // true
console.log(testAll(arr2, isNum, false)); // true

let arr3 = ["c", "a", "b"];
console.log(testAll(arr3, isNum, true)); //false
console.log(testAll(arr3, isNum, false)); //false

let arr4 = [];
console.log(testAll(arr4, isNum, true)); //false
console.log(testAll(arr4, isNum, false)); //false