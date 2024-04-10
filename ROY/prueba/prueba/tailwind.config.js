/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./web/**/*.{jsp,js,html}",
  "./node_modules/flowbite/**/*.js",
  "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      'sm1': '640px',
      'md1': '	768px',
      'lg1': '1024px',
      'xl1': '1280px',
      '2xl1': '1536px',
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],
}

