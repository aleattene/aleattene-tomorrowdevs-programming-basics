// import {dataInput} from "../../../../utils/dataInput";

export function translateToPigLatin(arrayStrings: string[]) {
    const wovelsLower: string = 'aeiou';
    const consonantsLower: string = 'bcdfghjklmnpqrstvwxyz';
    for (const idx in arrayStrings) {
        // ['string'] -> ['s']
        if (wovelsLower.includes(arrayStrings[idx][0])) arrayStrings[idx] += 'way';
        // ['string'] -> ['stringway']
        else if (consonantsLower.includes(arrayStrings[idx][0])) {
            // ['string'] -> ['s', 't', 'r', 'i', 'n', 'g']
            const word = Array.from(arrayStrings[idx]);
            while (consonantsLower.includes(word[0])) {
                word.push(word[0]);
                word.shift();
        }
        // ['s', 't', 'r', 'i', 'n', 'g'] -> ['stringay']
        arrayStrings[idx] = word.join('') + 'ay';
        }
    }
    return arrayStrings;
}

// const text = dataInput("Enter the text to translate (pig latin): ", 'LowerLetters');

// ORIGINAL LIST generation -> ["string","string"]
// const arrayOriginalStrings = text
//     .trim()
//     .split(" ");

// TRANSLATED (PIG LATIN) LIST
// const stringsTranslated = translateToPigLatin(arrayOriginalStrings);

// Displaying the RESULTS
// console.log(`Original Text: \n${text}`);
// console.log(`Text Translated (Pig Latin): \n${stringsTranslated.join(' ')}`);