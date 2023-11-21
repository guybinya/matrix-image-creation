export const getRandomInt = (num = 9) => Math.floor(Math.random() * num) + 1;
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function interpolate(x) {
    return Math.round(1 + ((x - 1) * (9 - 1)) / (100 - 1));
}
