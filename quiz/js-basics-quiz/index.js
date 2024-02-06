// 1. Print all flowers whose color is ‘pink’
let list = [{ flower: 'Rose', color: 'red' }, { flower: 'Jinnia', color: 'pink' },
{ flower: 'Hibiscus', color: 'pink' }]

function printAllPinkFlowers(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].color == "pink") {
            result.push(list[i].flower);
        }
    }
    return result;
}

console.log(printAllPinkFlowers(list));//[ 'Jinnia', 'Hibiscus' ]

// 2. Sum all elements in the 2-dimensional array
function sumElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum+= arr[i][j];
        }
    }
    return sum;
}

console.log(sumElements([[10,2,30],[4,5],[40]]));//91
console.log(sumElements([[4,1],[5,8,2],[9,2,8,1]]));//40

// 3. Implement ‘substring’ of string. Dont use ‘SUBSTRING’ method
// Function takes 3 arguments, string, startIndex, endIndex. (End Index is optional)
function substring(string, startIndex, endIndex) {
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (startIndex > string.length) {
        return "";
    }
    if (endIndex == undefined || endIndex > string.length) {
        endIndex = string.length;
    }

    let result = "";
    for (let i = startIndex; i < endIndex; i++) {
        result+= string[i];
    }
    return result;
}

console.log(substring("Javascript",0,4));//java
//If end Index is not given,-> endIndex = string length
console.log(substring("Javascript",4));//script
//If end Index is > string length,-> endIndex = string length
console.log(substring("Javascript",4,40));//script
//If startIndex is greater than string length -> return empty string
console.log(substring("Javascript",40));//'' (empty string)
//If startIndex is less than 0 -> start from ‘0’
console.log(substring("Javascript",-2));//Javascript
console.log(substring("Javascript",0));//Javascript

// 4. Build the pattern below for given string
function buildOctagon(string) {
    let countMiddleSpaces = 0;
    for (let i = 0; i < string.length; i++) {
        let temp = "";
        for (let j = 0; j < string.length - i; j++) {
            temp+= " ";
        }
        if (i == 0) {
            for (let j = 0; j < string.length; j++) {
                temp+= " " + string[j];
                countMiddleSpaces = string.length + string.length - 1;
            }
        } else {
            temp+= string[i];
            countMiddleSpaces+= 2;
            for (let j = 0; j < countMiddleSpaces; j++) {
                temp+= " ";
            }
            temp+= string[string.length - i - 1]
        }
        console.log(temp);
    }
}

buildOctagon('Javascript');
buildOctagon('apple');