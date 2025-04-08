import type { Config } from "tailwindcss";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			space: '#000000',
  			greystone: '#3C3C3C',
  			stone: '#2C2C2C',
  			ash: '#999999',
  			fog: '#F2F2F2',
  			nova: '#FFFFFF',
  			cosmo: '#5A4AE9',
  			moonbeam: '#8D85ED',
  			rosetint: '#E9B2FE',
  			sandman: '#FAE8BC',
  		},
  		fontFamily: {
  			montserrat: [
  				'var(--font-montserrat)',
  				'sans-serif'
  			],
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			spaceGrotesk: [
  				'var(--font-space-grotesk)',
  				'sans-serif'
  			]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config
