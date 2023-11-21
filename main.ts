import MatrixDisplay from './scripts/display.js';
import { generateColorArray, rgbColors } from './scripts/colors.js';
import { createMatrix } from './scripts/generateMatrix.js';
import { MatrixConfig } from './types.js';

const printMatrix = async (config: MatrixConfig) => {
	console.log('Creating your image!')
	const startTime = performance.now();
	const matrix = createMatrix(config.rowCount, config.rowLength)
	const colorsArray = generateColorArray(config.colorRandomAmount);
	const display = new MatrixDisplay(matrix, colorsArray, config.colors);
	// await display.printMatrixInConsole();
	await display.saveImageFromMatrix(config.filename);
	console.log(`It took ${(performance.now() - startTime) / 1000} seconds`)
};


const generateAllPairs = () => {
	const rgbColorsArray = Object.values(rgbColors);
	for (let i = 0; i < rgbColorsArray.length; i++) {
		for (let j = 0; j < rgbColorsArray.length; j++) {
			if (i !== j) {
				printMatrix({
					colorRandomAmount: 4,
					rowCount: 2556 / 4,
					rowLength: 1179 / 4,
					filename: `images/output_${j+i}.png`,
					colors: {first: rgbColorsArray[i], second: rgbColorsArray[j]}
				});
			}
		}
	}
}

generateAllPairs();

