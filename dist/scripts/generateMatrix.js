import { getRandomInt } from './utils.js';
export const generateRow = (rowLength) => {
    const outputArray = [];
    for (let i = 0; i < rowLength; i++) {
        const item = getRandomInt().toString();
        outputArray.push(item);
    }
    return outputArray;
};
export const createMatrix = (rowCount, rowLength) => {
    const outputMatrix = [];
    for (let i = 0; i < rowCount; i++) {
        const row = generateRow(rowLength);
        outputMatrix.push(row);
    }
    return outputMatrix;
};
