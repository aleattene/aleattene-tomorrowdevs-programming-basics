// import {dataInput} from "../../../../utils/dataInput";

export function getEvenParityBit(byte: string) {
    let count: number = 0;
    [...byte].forEach((bit) => {
        if (bit === '1') count++
    });
    return count % 2 == 0 ? '0' : '1';
}

/*
const dataBit = "init"
const dataBitValidated = true

# Acquisition and Control of the DATA entered by the USER
while dataBit != "":
    if dataBitValidated:
        dataBit = input("Enter the DATA (8bit) to be TRANSMITTED (or EMPTY line to QUIT): ")
        dataBitValidated = valutaEntry(dataBit)
        # EVEN PARITY BIT computing
        parityBit = computesEvenParityBit(dataBit)
        if dataBit != "" and dataBitValidated:
            # Displaying the EVEN PARITY BIT
            print("The PARITY BIT to be appended at the data bits for the EVEN PARITY is " + \
                str(parityBit))
        else:
            print("Incorrect entry. Try again.")
            dataBit = input("Enter the DATA (8bit) to be TRANSMITTED (or EMPTY line to QUIT): ")
            dataBitValidated = valutaEntry(dataBit)
            # EVEN PARITY BIT computing
            parityBit = computesEvenParityBit(dataBit)
            if dataBit != "" and dataBitValidated:
                # Displaying the EVEN PARITY BIT
                print("The PARITY BIT to be appended at the data bits for the EVEN PARITY is " +
                str(parityBit))
 */