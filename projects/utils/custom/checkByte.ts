
export function checkByte(byte: string): boolean {
    if (byte.length !== 8) return false;
    else {
        for (let bitId in Array.from(byte)) {
            if (byte[bitId] !== '0' && byte[bitId] !== '1') return false;
        }
    }
    return true;
}
