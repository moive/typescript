import { Product, calculateISV } from "./04-product";

const shoppingCart: Product[] = [
	{
		description: "Samsumg A72",
		price: 300,
	},
	{
		description: "Apple X",
		price: 1000,
	},
];

const [total, isv] = calculateISV(shoppingCart);

console.log("Total", total);
console.log("ISV", isv);
