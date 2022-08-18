
export function checkAlphabetLetter(input: string): boolean {
    return input.length === 1 &&
        ((input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) ||
            (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122));
}

export function checkLowerLettersAndSpaces(input: string): boolean {
    if (!input) return false
    else {
        for (let idx = 0; idx < input.length; idx++) {
            if ((input[idx].charCodeAt(0) < 97 || input.charCodeAt(0) > 122 ) && input[idx].charCodeAt(0) !== 32) return false }
    }
    return true
}