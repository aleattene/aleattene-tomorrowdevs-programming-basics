// import {dataInput} from "../../../../utils/dataInput";
//
// let month: string = dataInput("Enter the month: ", "Month");
//
// const dayMonth: number = getDaysMonth(month);
//
// console.log(`${month[0].toUpperCase() + month.slice(1).toLowerCase()} has ${dayMonth} days.`);

export function getDaysMonth (month: string): number {
    const thirtyOne = ['january', 'march', 'may', 'july', 'august', 'october', 'december'];
    const thirty = ['april', 'june', 'september', 'november'];
    if (thirtyOne.includes(month.toLowerCase())) {
        return 31;
    } else if (thirty.includes(month.toLowerCase())) {
        return 30;
    } else {
        return 29;
    }
}
