function run<T>(arg: T) {
	return arg;
}

const returnString = run("Hi world");
const returnNumber = run(100);
const returnArray = run([1, 2, 3, 4]);

const returnExplicit = run<boolean>(true);
