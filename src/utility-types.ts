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
