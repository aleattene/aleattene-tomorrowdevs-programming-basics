
export function checkChessboardPosition(position: string): boolean {
    const columnsChessboard = 'ABCDEFGH';
    const rowsChessboard = '12345678';
    if (position.length !== 2) return false;
    else {
        const column = position[0].toUpperCase();
        const row = position[1];
        return columnsChessboard.includes(column) && rowsChessboard.includes(row);
    }
}
