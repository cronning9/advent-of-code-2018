import path from 'path';
import { ReadInput } from '../lib/ReadInput';

interface LabelResult {
	hasTwo: boolean,
	hasThree: boolean
}

const checkLabel = (label: string): LabelResult  => {
	const arr = label.split('');
	const map: Map<string, number> = new Map();
	const result: LabelResult = { hasTwo: false, hasThree: false };

	for (const char of arr) {
		const val: number | undefined = map.get(char);
		if (!val) {
			map.set(char, 1);
		} else {
			map.set(char, val + 1);
		}
	}

	const values: IterableIterator<number> = map.values();
	for (const value of values) {
		if (result.hasTwo && result.hasThree) {
			break;
		}
		if (value === 2) result.hasTwo = true;
		if (value === 3) result.hasThree = true;
	}

	return result;
};

async function main(): Promise<number> {
	console.time('checks');
	const labels: Array<string> = await ReadInput.readFileAsArray(path.join('./inputs', 'd2.txt'));
	let twosCounter: number = 0;
	let threesCounter: number = 0;

	for (const label of labels) {
		const labelResults: LabelResult = checkLabel(label);
		if (labelResults.hasTwo) twosCounter++;
		if (labelResults.hasThree) threesCounter++;
	}

	const result = twosCounter * threesCounter;
	console.log(result);
	console.timeEnd('checks');
	return result;
}

main();
