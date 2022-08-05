/*
Write a program that asks the user to enter the width and length of a room.
Once these values have been read, your program should compute and display the area of the room.
The length and the width will be entered as floating-point numbers.
Include units in your prompt and output message; either feet or meters, depending on which
unit you are more comfortable working with.
*/
const input = require('prompt-sync')();

let widthRoom: number = Number(input('Enter the width of the room (meters): '));
let lengthRoom: number = Number(input('Enter the length of the room (meters): '));

const areaOfRoom: number = (widthRoom * lengthRoom);

if (isNaN(widthRoom) || isNaN(lengthRoom) || (!widthRoom) || (!lengthRoom)) {
    console.log(`I'm sorry. You have entered invalid data.`);
} else {
    console.log(`Area of the room: ${areaOfRoom} square meters.`);
}

