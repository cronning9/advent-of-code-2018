const fs = require('fs');
const newline: string = require('os').EOL;
const path = require('path');

const readFileAsync = (file: string, encoding: string | null): Promise<Error | string | Buffer> => {
	const options = encoding ? { encoding } : null;

	return new Promise<Error | string | Buffer>((resolve, reject) => {
		fs.readFile(file, options, (err: Error, data: string | Buffer) => {
			if (err) reject(err);
			resolve(data);
		});
	});
};

const readFileAsArray = async (file: string): Promise<Array<string>> => {
	const input = await readFileAsync(file, 'utf8');
	if (typeof input !== "string") {
		throw new Error('Buffer support not implemented');
	}
	return input.split(newline);
};

async function main(): Promise<void> {
	let frequency = 0;
	const numbers: Array<string> = await readFileAsArray(path.join(__dirname, 'input.txt'));

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
