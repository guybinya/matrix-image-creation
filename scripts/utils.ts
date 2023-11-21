export const getRandomInt = (num=9): number => Math.floor(Math.random() * num) + 1;

export function shuffleArray<T>(array: T[]): T[] {
	for (let i = array.length - 1; i > 0; i--) {
		// Generate a random index
		const j = Math.floor(Math.random() * (i + 1));

		// Swap elements at indices i and j
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function interpolate(x: number) {
	return Math.round(1 + ((x - 1) * (9 - 1)) / (100 - 1));
}
