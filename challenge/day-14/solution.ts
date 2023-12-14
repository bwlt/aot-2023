type DecipherNaughtyList<T extends string> =
	T extends `${infer P1}/${infer P2}`
		? P1 | DecipherNaughtyList<P2>
		: T