import type { Theme } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";

const defaultTheme: Theme = {
	theme: {
		fonts: {
			sans: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
			mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'",
		},
	},
};

export const darkTheme = createTheme({
	...defaultTheme,
	type: "dark",
});

export const lightTheme = createTheme({
	...defaultTheme,
	type: "light",
});
