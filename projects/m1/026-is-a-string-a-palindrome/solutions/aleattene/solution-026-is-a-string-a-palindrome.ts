
export function isPalindrome(word: string): boolean {
    let idxLeft: number = 0;
    let idxRight: number = word.length - 1;
    while(idxLeft < idxRight) {
        if (word[idxLeft].toLowerCase() != word[idxRight].toLowerCase()) {
            return false;
        } else {
            idxLeft++;
            idxRight--;
        }
    }
    return true;
}