type Count<
	Items extends ReadonlyArray<any>,
	T,
	Acc extends ReadonlyArray<any> = []
> =
	Items['length'] extends 0
		? Acc['length']
		: Items extends [infer Head, ...infer Tail]
			? Head extends T
				? Count<Tail, T, [...Acc, T]>
				: Count<Tail, T, Acc>
			: []