import { getRandomInt } from './utils.js';
import { Matrix } from '../types.js';

export const generateRow = (rowLength: number): Array<string> => {
	const outputArray = []
	for (let i = 0; i < rowLength; i++) {
		const item = getRandomInt().toString();
		outputArray.push(item);
	}
	return outputArray;
}

export const createMatrix = (rowCount: number, rowLength: number): Matrix => {
	const outputMatrix = []
	for (let i = 0; i < rowCount; i++) {
		const row: Array<string> = generateRow(rowLength);
		outputMatrix.push(row);
	}
	return outputMatrix;
}
