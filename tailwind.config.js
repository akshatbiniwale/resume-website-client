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
					"linear-gradient(to right, #f4a44f, #ac573f)",
			},
		},
	},
	plugins: [],
};
