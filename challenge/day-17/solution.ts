type Rules = {
	'win': ['👊🏻', '🖐🏾'] | ['🖐🏾', '✌🏽'] | ['✌🏽', '👊🏻']
   'lose': ['🖐🏾', '👊🏻'] | ['✌🏽', '🖐🏾'] | ['👊🏻', '✌🏽']
   'draw': ['👊🏻', '👊🏻'] | ['🖐🏾', '🖐🏾'] | ['✌🏽', '✌🏽']
}

type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type WhoWins<
   P1 extends RockPaperScissors,
   P2 extends RockPaperScissors
> = {
   [Result in keyof Rules]:
	   [P1, P2] extends Rules[Result]
		   ? Result
		   : never
}[keyof Rules]
