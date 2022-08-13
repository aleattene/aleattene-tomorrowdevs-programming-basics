// import {dataInput} from "../../../../utils/dataInput";

export function isVowelOrConsonant (letter: string) :string {
    const vowels = 'aeiouAEIOU';
    if (vowels.includes(letter)) {
        return 'is a Vowel';
    } else if (letter === 'y' || letter == 'Y') {
        return "sometimes is a Vowel, sometimes is a Consonant";
    } else {
        return 'is a Consonant';
    }
}

// let letter: string = dataInput("Enter the Letter: ", "AlphabetLetter");
//
// const vowelOrConsonant: string = isVowelOrConsonant(letter)
//
// console.log(`The entered letter (${letter}) ${vowelOrConsonant}.`);