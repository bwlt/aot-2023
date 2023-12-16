type FindRow<T> =
	T extends [...infer First, infer Last]
		? Last extends ReadonlyArray<any>
			? "🎅🏼" extends Last[number]
				? First["length"]
				: FindRow<First>
			: never
		: never;

type FindCol<T> =
	T extends [...infer First, "🎅🏼"]
		? First["length"]
		: T extends [...infer First, any]
			? FindCol<First>
			: never;

export type FindSanta<
	T extends ReadonlyArray<ReadonlyArray<any>>
> = [
	FindRow<T>,
	FindCol<T[number]>
];
