// const input = require('prompt-sync')();
//
// function dataInput(userMessage: string): number {
//     let isInt = false;
//     let value: number = -1;
//     while(!isInt) {
//         value = input(userMessage);
//         if (value) {
//             value = Number(value)
//             // TO FIX -> max value 59 (not 60)
//             isInt = (!isNaN(value) && Number.isInteger(value) && value >= 0)
//         }
//         if (!isInt) console.log("Incorrect entry. Try again.")
//     }
//     return value
// }

// console.log("Enter the Duration (days, hours, minutes and seconds).");
// let days: number = dataInput("Days: ")
// let hours: number = dataInput("Hours: ");
// let minutes: number = dataInput("Minutes: ");
// let seconds: number = dataInput("Seconds: ");


export function getSeconds(days: number, hours: number, minutes: number, seconds: number) {
    const secondsMinutes: number = minutes * 60
    const secondsHours: number = hours * (60 * 60)
    const secondsDays: number = days * (60 * 60 * 24)
    seconds += secondsMinutes + secondsHours + secondsDays
    return seconds
}

// const durationSeconds = getSeconds(days, hours, minutes, seconds);
// let durationSecondsFormatted = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' })
//     .format(durationSeconds)
// durationSecondsFormatted = durationSecondsFormatted.substring(0, durationSecondsFormatted.length-5)
//
// console.log(`Duration entered (${days}DD:${hours}HH:${minutes}MM:${seconds}SS) = ${durationSecondsFormatted} second(s).`)