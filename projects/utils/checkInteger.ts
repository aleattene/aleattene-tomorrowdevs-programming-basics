
export function checkPositiveInteger(input: string): boolean {
    const value: number = Number(input)
    return !isNaN(value) && Number.isInteger(value) && value > 0
}