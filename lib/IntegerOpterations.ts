export namespace IntegerOperations {
	export const intRange = (startAt: number, endAt: number): Array<number> =>
		[...Array(endAt - startAt + 1).keys()].map(x => x + startAt);
}
