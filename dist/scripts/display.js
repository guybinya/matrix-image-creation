import { colors, generateFadePallet } from './colors.js';
import { PRINTED_CHAR } from './consts.js';
import { drawImageFromMatrix } from './images.js';
export default class MatrixDisplay {
    constructor(matrix, colorsArray, colors) {
        this.display = '';
        this.colorMatrix = [];
        this.addItemToRow = (value, y, x) => {
            const advancePercentage = x / this.matrix[y].length * 100;
            const colorIndex = Math.round(advancePercentage);
            this.addItemToColorMatrix(y, x, colorIndex);
            this.addItemToDisplay(colorIndex);
        };
        this.matrix = matrix;
        this.colorsArray = colorsArray;
        this.colorMatrix = new Array(matrix.length);
        this.hexColorsArray = generateFadePallet(colors.first, colors.second);
    }
    addItemToDisplay(colorIndex) {
        this.display += `${this.colorsArray[colorIndex]}${PRINTED_CHAR}${colors.reset} `;
    }
    addItemToColorMatrix(rowIndex, itemIndex, colorIndex) {
        const a = this.colorMatrix[rowIndex];
        this.colorMatrix[rowIndex] = [...(a || []), this.hexColorsArray[colorIndex]];
    }
    addItemsToRow(row, rowIndex) {
        row.forEach((item, index) => this.addItemToRow(item, rowIndex, index));
        this.display += `\n`;
    }
    ;
    everyRow(row, index) {
        this.addItemsToRow(row, index);
    }
    ;
    async printMatrixInConsole() {
        this.matrix.forEach((row, index) => this.everyRow(row, index));
        console.log(this.display);
    }
    async saveImageFromMatrix(filename) {
        this.matrix.forEach((row, index) => this.everyRow(row, index));
        await drawImageFromMatrix(this.colorMatrix, filename);
    }
}
