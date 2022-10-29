
// const message: string = "M3ssagg10 d1 Pr0va";

export function caesarCipher (message: string, shift: number): string {
    const alphabetLowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphabetUpperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++ ) {
        const char = message[i];
        if (alphabetLowerLetters.includes(char)) {
            encryptedMessage += shiftedLetter(alphabetLowerLetters,char,shift);
        } else if (alphabetUpperLetters.includes(char)) {
            encryptedMessage += shiftedLetter(alphabetUpperLetters,char,shift);
        } else {
            encryptedMessage += char;
        }
    }
    return encryptedMessage;
}

export function shiftedLetter(alphabet: string[], char: string, numPositions: number): string | undefined {
    const idxLetter = alphabet.indexOf(char);
    const idxLetterShifted = (idxLetter + numPositions) % alphabet.length
    return alphabet.at(idxLetterShifted)
}


//console.log(caesarCipher(caesarCipher(message, 78), -78))