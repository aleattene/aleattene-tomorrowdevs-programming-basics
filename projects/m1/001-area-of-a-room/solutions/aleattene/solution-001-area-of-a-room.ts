//const input = require('prompt-sync')();

export const calculateAreaRoom = (widthRoom: number, lengthRoom: number): number => {
    return (widthRoom * lengthRoom);
}

// let widthRoom: number = input('Enter the width of the room (meters): ');
// let lengthRoom: number = input('Enter the length of the room (meters): ');
//
// if (isNaN(widthRoom) || isNaN(lengthRoom) || (!widthRoom) || (!lengthRoom)) {
//     console.log(`I'm sorry. You have entered invalid data.`);
// } else {
//     const areaOfRoom: number = calculateAreaRoom(widthRoom, lengthRoom)
//     console.log(`Area of the room: ${areaOfRoom} square meters.`);
// }
