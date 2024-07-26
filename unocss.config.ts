import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.3,
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle'
			}
		}),
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Lato',
					weights: [400, 700]
				},
				mono: 'Fira Code'
			},
			processors: createLocalFontProcessor({
				cacheDir: 'node_modules/.cache/unocss/fonts',
				fontAssetsDir: 'public/assets/fonts',
				fontServeBaseUrl: '/assets/fonts'
			})
		}),
		presetAnimations(),
		presetShadcn({
			color: 'violet'
		})
	],
	transformers: [transformerVariantGroup()],
	theme: {
		container: {
			center: true
		},
		breakpoints: {
			sm: '640px',
			md: '768px',
			lg: '1140px'
		}
	},
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				'**/*.{js,ts}'
			]
		}
	}
})
