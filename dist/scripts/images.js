import Jimp from 'jimp';
function calcOpacity(x, y) {
    const opacity = y;
    return Math.max(0, Math.round(Math.min(255, opacity)));
}
function drawPixel(matrix, y, x, image) {
    const rgbObj = matrix[y][x];
    const opacity = calcOpacity(x, y);
    image.setPixelColor(Jimp.rgbaToInt(rgbObj.red, rgbObj.green, rgbObj.blue, opacity), x, y);
}
export async function drawImageFromMatrix(matrix, filename) {
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
