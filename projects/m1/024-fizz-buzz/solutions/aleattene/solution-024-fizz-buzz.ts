export function getFizzBuzz (num: number): string {
    if (num % 3 == 0) {
        if (num % 5 == 0) {
            return "|        Fizz  Buzz         |"
        } else return "|           Fizz            |"
    } else {
        if (num < 10) return "|            0" + num.toString() + "             |"
        else if (num < 100 && num >= 10) return "|           " + num.toString() + "              |"
        else return "|           " + num.toString() + "             |"
    }
}

const numbers = 100;
console.log("*****************************");
console.log("|      List of ANSWERS      |");
console.log(`| for the FIRST ${numbers} NUMBERS |`);
console.log("|   of the FIZZ-BUZZ game   |");
console.log("*****************************");
for (let i=1; i <= numbers; i++) {
    console.log(getFizzBuzz(i))
}
console.log("*****************************")