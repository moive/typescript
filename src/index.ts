import { testPromiseApp } from "./app";
import { names } from "./ex-Keof";
import { getCssTransalteProperty } from "./dimensional-coordinates";

testPromiseApp;
console.log("names: ", names);
console.log(getCssTransalteProperty({ x: 25, y: 50, z: 45 }));
