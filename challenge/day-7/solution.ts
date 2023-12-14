type AppendGood<T extends Record<string, any>> = {
	[P in keyof T & string as `good_${P}`]: T[P];
};