type MakeArray<
	Fill,
	Length extends number,
	Acc extends ReadonlyArray<Fill> = []
> = Acc['length'] extends Length
	? Acc
	: MakeArray<Fill, Length, [...Acc, Fill]>

type BoxToys<
	S extends string,
	N extends number,
> = {
	[P in N]: MakeArray<S, P>
}[N]
