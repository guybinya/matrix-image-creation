import { getRandomInt, shuffleArray } from './utils.js';
export const colors = {
    brightBlack: "\x1b[90m", // Bright Black (Gray)
    brightRed: "\x1b[91m", // Bright Red
    brightGreen: "\x1b[92m", // Bright Green
    brightYellow: "\x1b[93m", // Bright Yellow
    brightBlue: "\x1b[94m", // Bright Blue
    brightMagenta: "\x1b[95m", // Bright Magenta
    brightCyan: "\x1b[96m", // Bright Cyan
    brightWhite: "\x1b[97m", // Bright White
    reset: "\x1b[0m",
};
export const rgbColors = {
    navyBlue: { red: 0, green: 0, blue: 128 },
    black: { red: 0, green: 0, blue: 0 },
    white: { red: 255, green: 255, blue: 255 },
    emeraldGreen: { red: 1, green: 152, blue: 117 },
    burgundy: { red: 128, green: 0, blue: 32 },
    darkPurple: { red: 48, green: 25, blue: 52 },
    gray: { red: 128, green: 128, blue: 128 },
    teal: { red: 0, green: 128, blue: 128 },
    coral: { red: 255, green: 127, blue: 80 },
    palePink: { red: 250, green: 218, blue: 221 },
    mintGreen: { red: 152, green: 255, blue: 152 },
    lightLavender: { red: 150, green: 123, blue: 182 },
};
export const generateColorArray = (colorRandomAmount) => {
    const colorsArray = [];
    const shuffledColors = shuffleArray(Object.values(colors));
    shuffledColors.forEach((color) => {
        const colorAmount = getRandomInt(colorRandomAmount);
        for (let j = 0; j < colorAmount; j++) {
            colorsArray.push(color);
        }
    });
    return colorsArray;
};
function interpolateColor(startColor, endColor, factor) {
    return {
        red: Math.round(startColor.red + factor * (endColor.red - startColor.red)),
        green: Math.round(startColor.green + factor * (endColor.green - startColor.green)),
        blue: Math.round(startColor.blue + factor * (endColor.blue - startColor.blue))
    };
}
export const generateFadePallet = (firstColor, secondColor) => {
    const colorGradient = [];
    const res = 250;
    for (let i = 0; i < res; i++) {
        colorGradient.push(interpolateColor(firstColor, secondColor, i / (res - 1)));
    }
    return colorGradient;
};
