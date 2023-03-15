let skills = ["Bash", "Counter", "Healing"];

interface Character {
	name: string;
	hp: number;
	skills: string[];
	homeTown?: string;
}

const character: Character = {
	name: "Strider",
	hp: 100,
	skills: ["Bash", "Counter", "Healing"],
};

character.homeTown = "Town Paleta";

console.log(character);
