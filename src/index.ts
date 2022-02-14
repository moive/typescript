import { testPromiseApp } from "./app";
import { names } from "./ex-Keof";
import { getCssTransalteProperty } from "./dimensional-coordinates";
import {
	app,
	applycssrules,
	otherExample,
	pickEx,
	todoPick,
} from "./utility-types";

testPromiseApp;
console.log("names: ", names);
console.log(getCssTransalteProperty({ x: 25, y: 50, z: 45 }));
applycssrules;
console.log(app);
console.log(pickEx);
console.log(todoPick);
otherExample;
