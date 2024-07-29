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
					name: 'Inter',
					weights: [400, 700]
				},
				serif: {
					name: 'Zilla Slab',
					weights: [400, 700]
				},
				mono: 'Fira Code'
			},
			processors: createLocalFontProcessor()
		}),
		presetAnimations(),
		presetShadcn({
			color: 'violet'
		})
	],
	transformers: [transformerVariantGroup()],
	theme: {
		container: {
			center: true,
			padding: '10px'
		}
	},
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				'components/**/*.ts'
			]
		}
	}
})
