type Reverse<T extends string> =
	T extends ""
		? ""
		: T extends `${infer Head}${infer Tail}`
			? `${Reverse<Tail>}${Head}`
			: T;