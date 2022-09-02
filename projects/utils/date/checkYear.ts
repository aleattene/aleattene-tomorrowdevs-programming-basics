
export function checkYear(year: string): boolean {
    return year.length > 0 && Number(year) >= 0;
}