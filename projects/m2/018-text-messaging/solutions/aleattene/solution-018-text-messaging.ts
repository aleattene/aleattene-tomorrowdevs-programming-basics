// import {dataInput} from "../../../../utils/dataInput";

// DICTIONARY - KEY and SYMBOLS
// const keySymbols: {[key: number] :string[] } = {
//     1: [".", ",", "?", "!", ":"],
//     2: ["A", "B", "C"],
//     3: ["D", "E", "F"],
//     4: ["G", "H", "I"],
//     5: ["J", "K", "L"],
//     6: ["M", "N", "O"],
//     7: ["P", "Q", "R", "S"],
//     8: ["T", "U", "V"],
//     9: ["W", "X", "Y", "Z"],
//     0: [" "]
// }

export function symbolsToKey(text_message: string, keySymbols: {[key: number] :string[] }): string {
    // LIST of the KEY PRESSES NEEDED for the MESSAGE entered by the USER
    const keysMapped = [];
    // Analysis of each character of the text message
    for (const char of text_message) {
        // Analysis of each key within the dictionary
        for (const [key, value] of Object.entries(keySymbols)) {
            // Evaluation if char of the text message is inside a list (values in the dictionary)
            if (value.includes(char.toUpperCase())) {
                for (let i = 0; i < value.length; i++) {
                    // Evaluation key presses needed (alias -> index + 1)
                    if (char.toUpperCase() === value[i]) {
                        keysMapped.push((key.repeat(i + 1)));
                    }
                }
            }
        }
    }
    return keysMapped.join('');
}


// Acquisition of DATA entered by the USER
// const text_message: string = dataInput("Enter the text-message: ")
// STRING TESTING
// const textMessage: string = "Hello, World!"

// Mapping SYMBOLS -> KEY PRESSES NEEDED
// const keyPressed = symbolsToKey(textMessage, keySymbols)

// Displaying the RESULT
// console.log(`Key pressed needed for a message entered: ${keyPressed}.`)
