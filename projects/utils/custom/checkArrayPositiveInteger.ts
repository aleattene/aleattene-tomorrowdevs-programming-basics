
export function checkArrayPositiveInteger(values: string, minLengthArray: number = 0) {
    const valuesArrays: string[] = values.trim().split(" ");  //  ["value","value"]
    if (!values.length || valuesArrays.length < minLengthArray) {
        return false;
    } else {
        for (const value of valuesArrays) {
            const valueNumber = Number(value);
            if (isNaN(valueNumber) || (!Number.isInteger(valueNumber))) return false;
        }
    }
    return true;
}