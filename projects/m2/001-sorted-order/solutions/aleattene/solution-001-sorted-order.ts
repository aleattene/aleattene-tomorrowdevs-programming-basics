import {dataInput} from "../../../../utils/dataInput";

const integers: number[] = [];
let input = true;

while (input) {
    let integerEntered = dataInput("Enter an integer number (zero to quit): ", "Integer");
    if (integerEntered === '0') input = false;
    else integers.push(parseInt(integerEntered));
}

integers.sort((a,b) => a - b);

if (integers.length !== 0) integers.forEach((elem) => console.log(elem));
else console.log('No Integer entered.');
