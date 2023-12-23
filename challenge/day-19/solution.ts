type _MakeArray<
	Length,
	Item,
	Acc extends ReadonlyArray<Item> = []
> = Length extends Acc['length']
	? Acc
	: _MakeArray<Length, Item, [...Acc, Item]>

type GetNext<T extends '🛹' | '🚲' | '🛴' | '🏄'> =
  T extends '🛹'
	? '🚲'
	: T extends '🚲'
	? '🛴'
	: T extends '🛴'
	? '🏄'
	: '🛹'

type Rebuild<
	T extends ReadonlyArray<number>,
	Current extends '🛹' | '🚲' | '🛴' | '🏄' = '🛹'
> = T extends [infer Head, ...infer Tail]
  ? Tail extends ReadonlyArray<number>
		? [
				..._MakeArray<Head, Current>,
				...Rebuild<Tail, GetNext<Current>>
			]
		: never
	: []