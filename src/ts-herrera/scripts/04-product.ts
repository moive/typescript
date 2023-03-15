export interface Product {
	description: string;
	price: number;
}

const telephone: Product = {
	description: "Nokia A1",
	price: 150,
};

const tablet: Product = {
	description: "iPaid Air",
	price: 350,
};

export function calculateISV(products: Product[]): [number, number] {
	let total = 0;

	products.forEach(({ price }) => {
		total += price;
	});

	return [total, total * 0.15];
}

const articles = [telephone, tablet];
const [total, isv] = calculateISV(articles);

console.log("total: ", total);
console.log("ISV: ", isv);
