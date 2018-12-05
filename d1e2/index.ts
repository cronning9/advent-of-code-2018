const path = require('path');
import { ReadInput } from "../lib/ReadInput";

const mutateFrequency = (n: string, frequency: number): number => {
	if (n[0] === '+') {
		return frequency + Number(n.slice(1));
	}
	if (n[0] === '-') {
		return frequency - Number(n.slice(1));
	}

	throw new Error('invalid input');
};

function runWithSet(numbers: Array<string>, bench: boolean = false): void {
	if (bench) console.time('withSet');
	const history: Set<number> = new Set();
	let frequency = 0;

	while(true) {
		for (const n of numbers) {
			frequency = mutateFrequency(n, frequency);

			if (history.has(frequency)) {
				console.log(frequency);
				if (bench) console.timeEnd('withSet');
				return;
			}

			history.add(frequency);
		}
	}
}

function runWithArray(numbers: Array<string>, bench: boolean = false): void {
	if (bench) console.time('withArray');
	const history: Array<number> = [];
	let frequency = 0;

	while(true) {
		for (const n of numbers) {
			frequency = mutateFrequency(n, frequency);

			if (history.includes(frequency)) {
				console.log(frequency);
				if (bench) console.timeEnd('withArray');
				return;
			}

			history.push(frequency);
		}
	}
}

function runWithMap(numbers: Array<string>, bench: boolean = false): void {
	if (bench) console.time('withMap');
	const history: Map<number, boolean> = new Map();
	let frequency = 0;

	while (true) {
		for (const n of numbers) {
			frequency = mutateFrequency(n, frequency);

			if (history.get(frequency)) {
				console.log(frequency);
				if (bench) console.timeEnd('withMap');
				return;
			}

			history.set(frequency, true);
		}
	}
}

async function main(): Promise<void> {
	const numbers: Array<string> = await ReadInput.readFileAsArray(path.join('./inputs', 'd1.txt'));
	runWithSet(numbers);
	runWithSet(numbers);
	runWithSet(numbers);
	runWithSet(numbers);
	runWithMap(numbers);
	runWithMap(numbers);
	runWithMap(numbers);
	runWithMap(numbers);
	runWithSet(numbers, true);
	runWithMap(numbers, true);
}

main();
//790

