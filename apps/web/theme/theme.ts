import type { BrandVariants, Theme } from "@fluentui/react-components";
import { createDarkTheme, createLightTheme } from "@fluentui/react-components";

const banyan: BrandVariants = {
	10: "#010404",
	20: "#0F1C1A",
	30: "#132F2C",
	40: "#143C39",
	50: "#144A46",
	60: "#125854",
	70: "#236661",
	80: "#39736E",
	90: "#4D807B",
	100: "#608D89",
	110: "#739B96",
	120: "#86A8A4",
	130: "#99B6B3",
	140: "#ADC4C1",
	150: "#C0D2D0",
	160: "#D4E0DF",
};

export const lightTheme: Theme = {
	...createDarkTheme(banyan),
	colorBrandForeground1: banyan[80],
};

export const darkTheme: Theme = {
	...createLightTheme(banyan),
};
