const input = require('prompt-sync')();

let widthRoom: number = Number(input('Enter the width of the room (meters): '));
let lengthRoom: number = Number(input('Enter the length of the room (meters): '));

const areaOfRoom: number = (widthRoom * lengthRoom);

if (isNaN(widthRoom) || isNaN(lengthRoom) || (!widthRoom) || (!lengthRoom)) {
    console.log(`I'm sorry. You have entered invalid data.`);
} else {
    console.log(`Area of the room: ${areaOfRoom} square meters.`);
}

