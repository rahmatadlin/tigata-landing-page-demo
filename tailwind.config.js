/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
    extend: {
        colors: {
            white: "#fff",
            slateblue: "#3047b9"
        },
        fontFamily: {
            "open-sans": ["Open Sans", "sans-serif"]
        }
    }
};
export const corePlugins = {
    preflight: false
};
  