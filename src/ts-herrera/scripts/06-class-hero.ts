class Persona {
	constructor(public name: string, public address: string) {}
}

class Hero extends Persona {
	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string
	) {
		super(realName, "New York, USA");
	}
}

const iroman = new Hero("Ironman", 45, "Tony");

console.log(iroman);
