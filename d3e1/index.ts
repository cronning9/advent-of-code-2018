import path from 'path';
import { IntegerOperations } from "../lib/IntegerOpterations";
import { ReadInput } from "../lib/ReadInput";

// example from exercise text
// #123 @ 3,2: 5x4
// #123 -- ID
// 3,2 -- left edge is 3 inches from fabric left edge
//				top edge is 2 inches from fabric top edge
// 5x4 -- 5 in width 4 in height

interface Claim {
	id: number,
	leftEdge: number,
	topEdge: number,
	height: number,
	width: number
}

const parseClaim = (str: string): Claim => {
	if (str[0] !== '#') {
		throw new Error('invalid input; aborting.')
	}
	const atmarkIndex: number = str.indexOf('@');
	const commaIndex: number = str.indexOf(',');
	const colonIndex: number = str.indexOf(':');
	const xIndex: number = str.indexOf('x');

	const id = Number(str.substring(1, atmarkIndex - 1));
	const leftEdge = Number(str.substring(atmarkIndex + 2, commaIndex));
	const topEdge = Number(str.substring(commaIndex + 1, colonIndex));
	const height = Number(str.substring(colonIndex + 2, xIndex));
	const width = Number(str.substring(xIndex + 1));

	return {
		id,
		leftEdge,
		topEdge,
		height,
		width
	};
};

const getKnowableWidth = (claims: Array<Claim>): number => {
	const leftmostClaim = claims.reduce((curr, next) => curr.leftEdge > next.leftEdge ? curr : next);
	return leftmostClaim.leftEdge + leftmostClaim.width;
};

const getKnowableHeight = (claims: Array<Claim>): number => {
	const bottomClaim = claims.reduce((curr, next) => curr.topEdge > next.topEdge ? curr : next);
	return bottomClaim.topEdge + bottomClaim.height;
};

async function main(): Promise<void> {
	const list: Array<string> = await ReadInput.readFileAsArray(path.join('./inputs', 'd3.txt'));
	const claims: Array<Claim> = list.map(x => parseClaim(x));

	const fabricWidth = getKnowableWidth(claims);
	const fabricHeight = getKnowableHeight(claims);

	const fabricField: Array<Array<number>> = Array(fabricHeight).map(() => IntegerOperations.intRange(0, fabricWidth));
	console.log(fabricField);
}

main();
