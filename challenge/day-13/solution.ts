type F<N extends number, Acc extends ReadonlyArray<any> = []> =
	N extends Acc['length']
		? Acc[number]
		: F<N, [...Acc, [...Acc, any]['length']]>

type DayCounter<N1 extends number, N2 extends number> = N1 | Exclude<F<N2>, F<N1>>;