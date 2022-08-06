// const input = require('prompt-sync')();
// let cents: number = Number(input("Enter the quantity (CENTS) to CHANGE: "));
// while not(cents.isdigit() and cents != "0"):
// print("Incorrect entry. Try again.")
// cents = input("Enter the quantity (CENTS) to CHANGE: ")
interface MoneyChange {
    toonies: number,
    loonies: number,
    quarters: number,
    dimes: number,
    nickels: number,
    pennies: number
}

export function changeMoney(cents: number): MoneyChange {
    const result: MoneyChange = {
        toonies: 0,
        loonies: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0,
    };
    if (cents >= 200) {
        result.toonies += ~~(cents / 200);
        cents %= 200;
    }
    if (cents >= 100) {
        result.loonies += ~~(cents / 100);
        cents = cents % 100;
    }
    if (cents >= 25) {
        result.quarters += ~~(cents / 25);
        cents %= 25;
    }
    if (cents >= 10) {
        result.dimes = ~~(cents / 10);
        cents %= 10;
    }
    if (cents >= 5) {
        result.nickels = ~~(cents / 5);
        cents %= 5;
    }
    if (cents) result.pennies += cents;
    return result
}

// const result: MoneyChange = changeMoney(cents);
//
// console.log(`RESULTS:`)
// console.log(`- Toonies = ${result.toonies}`)
// console.log(`- Loonies = ${result.loonies}`)
// console.log(`- Quarters = ${result.quarters}`)
// console.log(`- Dimes = ${result.dimes}`)
// console.log(`- Nickels = ${result.nickels}`)
// console.log(`- Pennies = ${result.pennies}`)