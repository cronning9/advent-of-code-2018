const fs = require('fs');
const newline: string = require('os').EOL;

export namespace ReadInput {
	export const readFileAsync = (file: string, encoding: string | null): Promise<Error | string | Buffer> => {
		const options = encoding ? { encoding } : null;

		return new Promise<Error | string | Buffer>((resolve, reject) => {
			fs.readFile(file, options, (err: Error, data: string | Buffer) => {
				if (err) reject(err);
				resolve(data);
			});
		});
	};

	export const readFileAsArray = async (file: string): Promise<Array<string>> => {
		const input = await readFileAsync(file, 'utf8');
		if (typeof input !== "string") {
			throw new Error('Buffer support not implemented');
		}
		return input.split(newline);
	};
}
