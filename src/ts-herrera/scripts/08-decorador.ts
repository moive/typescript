function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
	constructor: T
) {
	return class extends constructor {
		reportingURL = "http://www...";
		newProperty = "new Property";
		hello = "override";
	};
}

@reportableClassDecorator
class Person {
	public myName: string = "Moises";

	print() {
		console.log("Hello world");
	}
}

console.log(Person);

const person = new Person();

console.log(person.print());
