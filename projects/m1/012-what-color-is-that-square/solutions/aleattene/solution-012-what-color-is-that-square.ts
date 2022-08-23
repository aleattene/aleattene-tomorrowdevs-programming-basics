// import {dataInput} from "../../../../utils/dataInput";

export function getColorSquareFromPosition(position: string) {
    const lettersChessboard = 'ACEG';
    if (lettersChessboard.includes(position[0].toUpperCase())) return parseInt(position[1]) % 2 === 1 ? 'Black' : 'White';
    else return parseInt(position[1]) % 2 === 1 ? 'White' : 'Black';
}

// const position = dataInput('Enter the chessboard position (between A1 and H8): ', 'ChessboardPosition');
//
// const colorSquare = getColorSquareFromPosition(position);
//
// console.log(`Position ${position[0].toUpperCase()}${position[1]} - Color: ${colorSquare}`);