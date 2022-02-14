function applyCSSRules(element, styles: Partial<CSSStyleDeclaration>) {
	console.log(element, styles);
}

const styles: Partial<CSSStyleDeclaration> = {
	padding: "10px",
	margin: "5px",
};

export const applycssrules = applyCSSRules("div", styles);

interface Config {
	VERSION: string;
	API_KEY: string;
}

interface IApp {
	config: Config;
}

class App implements IApp {
	config: Readonly<Config>;
	constructor(config) {
		this.config = config;
	}

	doSomething() {
		this.config.VERSION = "";
		console.log(this.config);
	}
}

export const app = new App({
	VERSION: "1.0.0",
	API_KEY: "api_key",
});

interface User {
	id: number;
	name: string;
	surname: string;
}

const pick = <O, K extends keyof O>(keys: K[], obj: O): Pick<O, K> => {
	const copy: any = {};
	keys.forEach((k) => {
		copy[k] = obj[k];
	});
	console.log("copy", copy);

	return copy;
};

const user: User = {
	id: 10,
	name: "Moises",
	surname: "Moive",
};

const partialWithId = pick(["id", "name"], user);

export const pickEx = partialWithId.name;

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreviewPick = Pick<Todo, "title" | "completed">;

export const todoPick: TodoPreviewPick = {
	title: "Clean room",
	completed: false,
};

const showProps = <T>(o: T, ...keys: (keyof T)[]): void => {
	keys.forEach((key) => console.log(o[key]));
};

const dev = {
	type: "frontend",
	languages: ["js", "css", "html"],
	senior: true,
};

export const otherExample = showProps(dev, "type", "languages");

interface ProductItem {
	name: string;
	price: number;
}

type Evolver<O> = {
	[Key in keyof O]: (arg: O[Key]) => O[Key];
};

const formatString = (str: string) => (
	(str = str.trim()), str[0].toUpperCase() + str.substr(0)
);

const applyIVA = (price: number): number => price * 1.21;

const transformation: Evolver<ProductItem> = {
	name: formatString,
	price: applyIVA,
};

const evolve = <Obj extends object>(
	transformations: Evolver<Obj>,
	obj: Obj
): Obj => {
	return Object.keys(obj).reduce<Obj>((result, key) => {
		result[key] =
			key in transformations ? transformations[key](obj[key]) : obj[key];
		return result;
	}, {} as Obj);
};

const product: ProductItem = {
	name: '     macbook Pro 16"',
	price: 2638,
};

export const updatedProduct = evolve(transformation, product);
