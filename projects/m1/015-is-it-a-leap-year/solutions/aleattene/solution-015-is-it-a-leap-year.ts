import {dataInput} from "../../../../utils/dataInput";

function isLeapYear(year:string) {
    const yearNumber = Number(year);
    if (yearNumber % 400 == 0 || (yearNumber % 4 == 0 && yearNumber % 100 != 0)) {
        return "is a Leap Year";
    } else {
        return "is not a Leap Year";
    }
}

const year = dataInput('Enter the Year you want to know if it is a leap or not: ', 'Year');

const yearLeapOrNot = isLeapYear(year);

console.log(`The year ${year} ${yearLeapOrNot}.`);