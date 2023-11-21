import Jimp from 'jimp';
import { RGB } from '../types.js';

function calcOpacity(x: number, y: number) {
	const opacity = y;
	return Math.max(0, Math.round(Math.min(255, opacity)));
}

function drawPixel(matrix: RGB[][], y: number, x: number, image) {
	const rgbObj = matrix[y][x];
	const opacity = calcOpacity(x, y);
	image.setPixelColor(Jimp.rgbaToInt(rgbObj.red, rgbObj.green, rgbObj.blue, opacity), x, y);
}

export async function drawImageFromMatrix(matrix: RGB[][], filename: string) {
	const width = matrix[0].length;
	const height = matrix.length;
	const image = new Jimp(width, height, 0xFFFFFFFF);

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			drawPixel(matrix, y, x, image);
		}
	}

	await image.writeAsync(`${filename}.png`);
	console.log('Image created!');
}
