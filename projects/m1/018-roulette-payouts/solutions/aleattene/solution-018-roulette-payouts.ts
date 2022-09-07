// Numbers from 0 to 36
const rangeNumbers = 36;
// Numbers from 0 to 37 (37 to be considered 00)
const number = Math.floor(Math.random() * (rangeNumbers + 2));

export function overOrUnder18(number: number): string {
    if (number >= 1 && number <= 18) return "1 to 18";
    else return "19 to 36";
}

export function redOrBlack(number: number): string {
    if ((number >= 1 && number <= 10) || (number >= 19 && number <= 28)) {
        if (number % 2 === 1) return "Red";
        else return "Black";
    }
    else if ((number >= 11 && number <= 18) || ( number >= 29 && number <= 36)) {
        if (number % 2 === 0) return "Red";
        else return "Black";
    }
    else return "Error";
}

export function oddOrEven(number: number): string {
    return (number % 2 === 1) ? 'Odd' : 'Even';
}

console.log('*******************');
console.log(`     Number ${(number === 37) ? '00' : number}`);
console.log('*******************');
console.log('***** PAYMENT *****');
if (number === 37) console.log("- Pay 00");
else if (number === 0) console.log('- Pay 0');
else {
    console.log(`- Pay ${number}`);
    console.log(`- Pay ${redOrBlack(number)}`);
    console.log(`- Pay ${oddOrEven(number)}`);
    console.log(`- Pay ${overOrUnder18(number)}`);
    console.log('*******************');
}
