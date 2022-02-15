type DarkColors = "black" | "grey";
type LightColors = "white" | "yellow" | "pink";

type Status = "sad" | "happy";

type Palette<T extends Status> = T extends "sad" ? DarkColors : LightColors;

export const palette: Palette<"happy"> = "white";
