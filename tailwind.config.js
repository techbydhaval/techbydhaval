/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
   safelist: [
    'bg-green-100',
    'text-green-500',
    'text-green-700',
    'bg-blue-100',
    'text-blue-500',
    'text-blue-700',
    'bg-purple-100',
    'text-purple-500',
    'text-purple-700',
    // Add all other color combinations you intend to use
  ]
}
