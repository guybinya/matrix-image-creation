import { colors, generateFadePallet } from './colors.js';
import { PRINTED_CHAR } from './consts.js';
import { ColorMatrix, Matrix, RGB, RGBPair } from '../types.js';
import { getRandomInt, interpolate, sleep } from './utils.js';
import { drawImageFromMatrix } from './images.js';


export default class MatrixDisplay {
	protected display: string = '';
	protected colorsArray: Array<string>;
	protected hexColorsArray: Array<RGB>;
	protected matrix: Matrix;
	protected colorMatrix: ColorMatrix = [];

	constructor(matrix: Matrix, colorsArray: Array<string>, colors: RGBPair) {
		this.matrix = matrix;
		this.colorsArray = colorsArray;
		this.colorMatrix = new Array(matrix.length);
		this.hexColorsArray = generateFadePallet(colors.first, colors.second);
	}

	protected addItemToRow = (value: number, y: number, x: number) => {
		const advancePercentage = x / this.matrix[y].length * 100;
		const colorIndex = Math.round(advancePercentage);
		this.addItemToColorMatrix(y, x, colorIndex);
		this.addItemToDisplay(colorIndex);
	};

	private addItemToDisplay(colorIndex: number) {
		this.display += `${this.colorsArray[colorIndex]}${PRINTED_CHAR}${colors.reset} `;
	}

	private addItemToColorMatrix(rowIndex: number, itemIndex: number, colorIndex: number) {
		const a = this.colorMatrix[rowIndex]
		this.colorMatrix[rowIndex] = [...(a || []), this.hexColorsArray[colorIndex]];
	}

	protected addItemsToRow(row: Array<number>, rowIndex: number) {
		row.forEach((item, index) => this.addItemToRow(item, rowIndex, index));
		this.display += `\n`;
	};

	protected everyRow(row: Array<number>, index: number) {
		this.addItemsToRow(row, index);
	};

	async printMatrixInConsole() {
		this.matrix.forEach((row, index) => this.everyRow(row, index));
		console.log(this.display);
	}

	async saveImageFromMatrix(filename: string) {
		this.matrix.forEach((row, index) => this.everyRow(row, index));
		await drawImageFromMatrix(this.colorMatrix, filename);
	}
}
