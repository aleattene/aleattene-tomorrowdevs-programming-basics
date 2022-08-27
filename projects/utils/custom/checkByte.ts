
export function checkByte(byte: string): boolean {
    if (byte.length !== 8) return false;
    else {
        for (const bit of byte) {
            if (bit !== '0' && bit !== '1') return false;
        }
    }
    return true;
}
