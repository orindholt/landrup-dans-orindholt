/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			flex: {
				2: "2 2 0%",
				3: "3 3 0%",
				4: "4 4 0%",
				5: "5 5 0%",
				6: "6 6 0%",
			},
			content: {
				none: "''",
			},
			colors: {
				gray: "#EAEAEA",
				purple: "#5E2E53",
				pink: "#E1A1E9",
			},
		},
	},
	plugins: [],
};
