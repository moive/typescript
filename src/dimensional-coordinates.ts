interface TwoDimensionalCoordinates {
	x: number;
	y: number;
}

interface ThreeDimensionalCoordinates extends TwoDimensionalCoordinates {
	z: number;
}

type CarthesianCoordinates =
	| TwoDimensionalCoordinates
	| ThreeDimensionalCoordinates;

export function getCssTransalteProperty(coords: CarthesianCoordinates) {
	if (isThreeDimensionalCoordinates(coords)) {
		return `translate3d(${coords.x}px, ${coords.y}px, ${coords.z}px)`;
	} else {
		return `tranlate(${coords.x}px, ${coords.y}px)`;
	}
}

function isThreeDimensionalCoordinates(
	coords: CarthesianCoordinates
): coords is ThreeDimensionalCoordinates {
	return coords.hasOwnProperty("z");
}
