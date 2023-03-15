interface Passenger {
	name: string;
	children?: string[];
}

const passenger1: Passenger = {
	name: "Fernando",
};

const passenger2: Passenger = {
	name: "Melissa",
	children: ["Natalia", "Gabriel"],
};

function printChildren(passenger: Passenger): void {
	const numberChildren = passenger.children?.length || 0;
	console.log(numberChildren);
}

printChildren(passenger1);
