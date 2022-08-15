// import {dataInput} from "../../../../utils/dataInput";

// let note: string = dataInput("Enter the NOTE (C0, B4, D2, etc): ", "Note");
//
// const frequencyNote: number = getFrequencyFromNote(note);
//
// console.log(`The frequency of the note ${note} is ${frequencyNote.toFixed(2)} Hz`);

export function getFrequencyFromNote(note: string) :number {
    const normalizer: number = 2 ** (parseInt(note[1])-4);
    let frequency: {[key: string]: number};
    frequency = { A: 440.00, B: 493.88, C: 261.63, D: 293.66, E: 329.63, F: 349.23, G: 392.00 }
    return (frequency[note[0].toUpperCase()] * normalizer);
}
