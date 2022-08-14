
export function checkMonth(input: string): boolean {
    const months = ['january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december'];
    return months.includes(input.toLowerCase());
}