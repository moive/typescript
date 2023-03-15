interface Product {
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

function calculateISV(products: Product[]): number {
	let total = 0;

	products.forEach((producto) => {
		total += producto.price;
	});

	return total * 0.15;
}

const articles = [telephone, tablet];
const isv = calculateISV(articles);

console.log("ISV: ", isv);
