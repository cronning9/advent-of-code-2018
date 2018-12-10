import path from 'path';
import { ReadInput } from '../lib/ReadInput';
import { IntegerOperations } from '../lib/IntegerOpterations';

const resultString = (x: string, y: string): string | null => {
	const xArr: Array<string> = x.split('');
	const yArr: Array<string> = y.split('');
	const diffIndices: Array<number> = [];

	for (const i of IntegerOperations.intRange(0, x.length - 1)) {
		if (xArr[i] !== yArr[i]) diffIndices.push(i);
		if (diffIndices.length > 1) return null;
	}

	return x.substring(0, diffIndices[0]) + x.substring(diffIndices[0] + 1);
};

async function main(): Promise<void> {
	console.time('bench');
	const labels: Array<string> = await ReadInput.readFileAsArray(path.join('./inputs', 'd2.txt'));

	for (const [i, label] of Object.entries(labels)) {
		for (const [j, comp] of Object.entries(labels)) {
			if (i === j) continue;
			const result = resultString(label, comp);
			if (result) {
				console.timeEnd('bench');
				console.log(result);
				return;
			}
		}
	}
}

main();
