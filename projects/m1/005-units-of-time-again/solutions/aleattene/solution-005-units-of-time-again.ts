// import {dataInput} from "../../../../utils/dataInput";

// let duration: number = Number(dataInput("Enter the duration (seconds): ", "PositiveInteger"));

export function getDaysHoursMinutesSeconds(seconds: number) {
    const secondsInDay: number = 86400;     // 1 day = ( 60 * 60 * 24 ) seconds
    const secondsInHour: number = 3600;     // 1 hour = ( 60 * 60 ) seconds
    const secondsInMinute: number = 60;     // 1 minute = 60 seconds
    let days: number = 0;
    let hours: number = 0;
    let minutes: number = 0;
    if (seconds >= secondsInDay) {
        days = ~~ (seconds / secondsInDay);
        seconds = seconds % secondsInDay;
    }
    if (seconds >= secondsInHour) {
        hours = ~~ (seconds / secondsInHour);
        seconds = seconds % secondsInHour;
    }
    if (seconds >= secondsInMinute) {
        minutes = ~~ (seconds / secondsInMinute);
        seconds = seconds % secondsInMinute;
    }
    return {days, hours, minutes, seconds};
}

export function createDurationFormatted(days: number, hours: number, minutes: number, seconds: number) {
    return `${days}DD:${hours}HH:${minutes}MM:${seconds}SS`;
}

// const {days, hours, minutes, seconds} = getDaysHoursMinutesSeconds(duration)
// const durationFormatted = createDurationFormatted(days, hours, minutes, seconds)
// console.log(`Duration entered (${duration} seconds) = ${durationFormatted}.`)