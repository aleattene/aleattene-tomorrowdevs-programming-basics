// import {dataInput} from "../../../../utils/dataInput";

// const costUnitaryLoavesBread: number = 3.49;
// const percDiscount: number = 0.6;

// let num: number = Number(dataInput("Enter the number of day old loaves of bread: ", "PositiveInteger"));

export function displayReceiptLoavesBread (numLoavesBread: number, costUnitaryLoavesBread: number, percDiscount: number):string {
    const costLB: number = numLoavesBread * costUnitaryLoavesBread;
    const discount: number = costLB * percDiscount;
    const costFinal: number = costLB - discount;
    return `Cost Loaves Bread = ${costLB.toFixed(2)}
         Discount = ${discount.toFixed(2)}
            Total = ${costFinal.toFixed(2)}`
}

// console.log(displayReceiptLoavesBread(num, costUnitaryLoavesBread, percDiscount));


