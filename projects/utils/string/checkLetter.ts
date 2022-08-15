
export function checkAlphabetLetter(input: string): boolean {
    return input.length === 1 &&
        ((input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) ||
            (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122));
}