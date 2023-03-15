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
