// import {dataInput} from "../../../../utils/dataInput";

export function getEvenParityBit(byte: string) {
    let count: number = 0;
    Array.from(byte).forEach((bit) => {
        if (bit === '1') count++
    });
    return count % 2 == 0 ? '0' : '1';
}


// do {
//    const dataBit = dataInput("Enter the data (8bit) to be transmitted (or empty line to quit): ",'Byte');
//    if (!dataBit) break;
//    else {
//        const parityBit = getEvenParityBit(dataBit)
//        console.log(`The parity bit to be appended at the data bits (for the even parity) is ${parityBit}.`);
//    }
// } while (true);