// TYPES

type DarkColors = "black" | "grey";
type LightColors = "white" | "yellow" | "pink";

type Status = "sad" | "happy";

type Palette<T extends Status> = T extends "sad" ? DarkColors : LightColors;

export const palette: Palette<"happy"> = "white";

// READONLY
const sampleArray = [1, 2, 3];
const otherArray = [2, 4, 6, 8];

const tailMutable = <T>(array: T[]): T[] => (array.shift(), array);
const tailInmutable = <T>(array: Readonly<T[]>): T[] => {
	const [, ...tail] = array || [];
	return tail;
};

console.log(sampleArray, tailMutable(sampleArray));
console.log(otherArray, tailInmutable(otherArray));

// PARTIAL
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

//REQUIRED
interface Coord {
	x: number;
	y: number;
	z?: number;
}

class Point3D {
	private coord: Required<Coord>;
	constructor(coord: Coord) {
		this.coord = {
			...coord,
			z: coord.z || 0,
		};
	}

	getZ() {
		return this.coord.z;
	}
}

const p3d = new Point3D({ x: 1, y: 2, z: 5 });
console.log(p3d.getZ());

// EXCLUDE & EXTRACT

type Diff<A extends object, B extends object> = {
	[P in Exclude<keyof A, keyof B>]: A[P];
};

type Common<A extends object, B extends object> = {
	[P in Extract<keyof A, keyof B>]: A[P] | B[P];
};

interface UserDetails {
	name: string;
	id: string;
	age: number;
	phone: number;
	married: boolean;
}

interface UserID {
	name: string;
	id: number;
}

type UserDiff = Diff<UserDetails, UserID>;
type UserCommon = Common<UserDetails, UserID>;

const calculateCommon = <A extends object, B extends object>(
	a: A,
	b: B
): Common<A, B> => {
	const result = { ...a };
	for (const key in a) {
		if (a.hasOwnProperty(key) && !b.hasOwnProperty(key)) delete result[key];
	}
	return result;
};

const userId: UserID = {
	name: "Moises",
	id: 2345454,
};

const userDetail: UserDetails = {
	name: "Oscar",
	id: "497644",
	age: 35,
	phone: 9144654654,
	married: true,
};

const userCommon = calculateCommon(userId, userDetail);

console.log(userCommon);

// PICK AND OMIT
const omit = <T extends object, K extends keyof T>(
	o: T,
	...keys: K[]
): Omit<T, K> => {
	const result = { ...o };
	keys.forEach((key) => delete result[key]);
	return result;
};

const sampleObj = { a: "A", b: "B", c: "C" };

const onlyC = omit(sampleObj, "a", "b");
console.log(onlyC);

// RECORD

type Sizes = "small" | "medium" | "large";
type EurSizes = Record<Sizes, string>;
type UkSizes = Record<Sizes, number>;

const eurSizes: EurSizes = { small: "s", medium: "m", large: "l" };
const ukSizes: UkSizes = { small: 8, medium: 10, large: 12 };

// NULLABLE
type choice = "left" | "right" | "center" | undefined | null;

type ValidChoice = NonNullable<choice>;

let t: ValidChoice;

// FUNCTION HELPER
interface UserIdentify {
	name: string;
	id: number;
}

const addTimestamp = (user: UserIdentify, useLocale: boolean = false) => ({
	...user,
	timestamp: useLocale ? Date().toLocaleString() : Date.now(),
});

type UserWithTimestamp = ReturnType<typeof addTimestamp>;
type Params = Parameters<typeof addTimestamp>;

// caso práctico
type GenericFunction = (...args: any[]) => any;

const delay =
	<F extends GenericFunction>(f: F, t: number) =>
	(...args: Parameters<F>): Promise<ReturnType<F>> => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(f(...args)), t);
		});
	};

const shout = (text: string) => `${text.toUpperCase()}!!!`;
console.log(shout("pim pam"));

const delayedShout = delay(shout, 1000);
delayedShout("toma lacasitos").then((msg) => console.log(msg));
