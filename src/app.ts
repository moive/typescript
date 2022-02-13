function iReturnPromiseAfter1Second(): Promise<string> {
	return new Promise((resolve) => {
		setTimeout((_) => resolve("Hello world!"), 2000);
	});
}

export const testPromiseApp = Promise.resolve(123)
	.then((res) => {
		return iReturnPromiseAfter1Second();
	})
	.then((res) => {
		console.log(res);
	});
