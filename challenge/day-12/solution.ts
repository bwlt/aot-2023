type FindSanta<T extends ReadonlyArray<any>> =
	T extends [...infer P, "🎅🏼"]
	? P["length"]
	: T extends [...infer P, any]
	? FindSanta<P>
	: never;