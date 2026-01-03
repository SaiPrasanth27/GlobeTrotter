/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4f46e5', // Indigo 600
                    light: '#6366f1',   // Indigo 500
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')",
            }
        },
    },
    plugins: [],
}
