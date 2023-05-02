class Persona {
	constructor(
		public firts_name: string,
		public last_name,
		public address: string
	) {}
}

class Hero {
	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string,
		public person: Persona
	) {}
}
// class Hero extends Persona {
// 	constructor(
// 		public alterEgo: string,
// 		public age: number,
// 		public realName: string
// 	) {
// 		super(realName, "New York, USA");
// 	}
// }

const tony = new Persona("Tony", " Stark", "New York");
const iroman = new Hero("Ironman", 45, "Tony", tony);

console.log(iroman);
