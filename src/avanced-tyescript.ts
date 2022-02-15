type DarkColors = "black" | "grey";
type LightColors = "white" | "yellow" | "pink";

type Status = "sad" | "happy";

type Palette<T extends Status> = T extends "sad" ? DarkColors : LightColors;

export const palette: Palette<"happy"> = "white";

const sampleArray = [1, 2, 3];
const otherArray = [2, 4, 6, 8];

const tailMutable = <T>(array: T[]): T[] => (array.shift(), array);
const tailInmutable = <T>(array: Readonly<T[]>): T[] => {
	const [, ...tail] = array || [];
	return tail;
};

console.log(sampleArray, tailMutable(sampleArray));
console.log(otherArray, tailInmutable(otherArray));

const createState = <T extends object>(initialState: T) => {
	let state: T = initialState;

	return {
		setState: (partialState: Partial<T>) =>
			(state = { ...state, ...partialState }),
	};
};

const { setState } = createState({
	username: "b4dc4t",
	avatar: "car.png",
	posts: 18,
	premium: false,
});

console.log(setState({ posts: 19, premium: true }));
