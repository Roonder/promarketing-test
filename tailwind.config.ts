import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: "#010101CC",
        primary: "#091B50",
        "primary-500": "#3C4D82",
        accent: "#FBBF24",
        marble: "#E0E4EF",
        "custom-neutral": "#E8E8E8",
        "custom-neutral-500": "#909090"
      }
    },
  },
  plugins: [],
}
export default config
