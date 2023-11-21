export type Matrix = Array<Array<number>>;
export type ColorMatrix = Array<Array<RGB>>;

export interface MatrixConfig {
	colorRandomAmount: number,
	rowCount: number,
	rowLength: number,
	filename: string,
	colors: RGBPair
}

export type RGB = {red: number, green: number, blue: number}
export type RGBPair = {first: RGB, second: RGB}
