// const input = require('prompt-sync')();
//
// let drinkContainerUnderEqualOneLiter: number = Number(
//     input(`How many drink containers, holding one liter or less, do you have to recycle? `)
// );
// let drinkContainerOverOneLiter: number = Number(
//     input(`And how many, holding more than one liter? `)
// );
//
// if (
//     isNaN(drinkContainerUnderEqualOneLiter) || isNaN(drinkContainerOverOneLiter) ||
//     (!drinkContainerUnderEqualOneLiter) || (!drinkContainerOverOneLiter)) {
//     console.log(`I'm sorry. You have entered invalid value(s).`);
// } else {
//     const refund: number = calculateRefund(drinkContainerUnderEqualOneLiter, drinkContainerOverOneLiter)
//     console.log(`Your refund is $ ${ refund.toFixed(2) }.`);
// }


export function calculateRefund(drinkContainerUnderEqualOneLiter: number, drinkContainerOverOneLiter: number) {
    const refundUnderEqualOneLiter: number = 0.10;
    const refundOverOneLiter: number = 0.25;
    return (
        (refundUnderEqualOneLiter * drinkContainerUnderEqualOneLiter) +
        (refundOverOneLiter * drinkContainerOverOneLiter)
    );
}
