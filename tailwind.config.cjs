module.exports = {
    purge: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontfamily: {
                poppins: ['Poppins']
            },
            screens: {
                'xs': {
                    'raw': '(max-width:640px)'
                }
            }
        },
    },
    plugins: [],
}