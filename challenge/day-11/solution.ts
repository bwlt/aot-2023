type SantaListProtector<T> =
	T extends Record<string, any>
		? { readonly [P in keyof T]: T[P] extends Function
			? T[P]
			: SantaListProtector<T[P]> }
		: T extends Array<infer P>
			? ReadonlyArray<P>
			: T;