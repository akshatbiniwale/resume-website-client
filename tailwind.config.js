/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// colors used in the project
			colors: {
				primary: "#F6A64F",
				secondary: "#B56141",
				background: "#FFFCF8",
				white: "#FBFBFB",
			},

			backgroundImage: {
				"gradient-primary":
					"linear-gradient(to right, #4f9cf4, #3f57ac)",
			},
		},
	},
	plugins: [],
};
