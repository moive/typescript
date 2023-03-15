class Hero {
	// alterEgo: string;
	// age:number;
	// realName:string;

	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string
	) {}
}

const iroman = new Hero("Ironman", 45, "Tony");

console.log(iroman);
