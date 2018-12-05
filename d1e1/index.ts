const path = require('path');
import { ReadInput } from '../lib/ReadInput';

async function main(): Promise<void> {
	let frequency = 0;
	const numbers: Array<string> = await ReadInput.readFileAsArray(path.join('./inputs', 'd1.txt'));

	for (const n of numbers) {
		if (n[0] === '+') {
			frequency += Number(n.slice(1));
		}
		if (n[0] === '-') {
			frequency -= Number(n.slice(1));
		}
	}

	console.log(frequency);
}

main();
