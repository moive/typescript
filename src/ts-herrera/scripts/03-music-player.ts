interface Player {
	volume: number;
	second: number;
	song: string;
	details: Details;
}

interface Details {
	author: string;
	year: number;
}

const player: Player = {
	volume: 90,
	second: 36,
	song: "Mess",
	details: {
		author: "Ed Sheeran",
		year: 2015,
	},
};

const author = "Diamont";

const {
	volume: vol,
	second,
	song,
	details: { author: authorDetail },
} = player;
// const { author } = details;

console.log("The volume is: ", vol);
console.log("The second is: ", second);
console.log("The song is: ", song);
console.log("The author is: ", authorDetail);

console.log("===================================");

const dbz: string[] = ["Goku", "Vegeta", "Trunks", "Picoro"];
const [, , v3, v4 = "Not found"] = dbz; // v4 = "Not found" is default
// const [v1, v2, v3] = dbz;

// console.log("Character 1: ", v1);
// console.log("Character 2: ", v2);
console.log("Character 3: ", v3);
console.log("Character 4: ", v4);
