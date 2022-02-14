const getPropFromCollection = <O, K extends keyof O>(
	collection: O[],
	prop: K
): O[K][] => {
	return collection.map((element) => element[prop]);
};

interface User {
	id: number;
	name: string;
}

const collection: User[] = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Peter" },
	{ id: 3, name: "Alex" },
];
const names = getPropFromCollection(collection, "id");

export { names };
