
export function checkNote(input: string): boolean {
    return input.length === 2 &&
        ((input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 71) && (input.charCodeAt(1) >= 48 && input.charCodeAt(1) <= 56));
}