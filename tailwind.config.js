/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'print': { 'raw': 'print' },
            },
            colors: {
                'chart-0': '#0c4674',
                'chart-1': '#206725',
                'chart-2': '#990b0d',
                'chart-3': '#9e5f1e',
                'chart-4': '#4d2964',
                'chart-5': '#6c9fbf',
                'chart-6': '#7f9f5b',
                'chart-7': '#ad7e45',
                foreground: 'var(--primary)',
                background: 'var(--secondary)',
            },
        },
    },
    plugins: [],
    safelist: [
        'bg-chart-0',
        'bg-chart-1',
        'bg-chart-2',
        'bg-chart-3',
        'bg-chart-4',
        'bg-chart-5',
    ]
}