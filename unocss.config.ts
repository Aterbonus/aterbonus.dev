import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { defineConfig, presetIcons, presetWebFonts, presetWind4, transformerVariantGroup } from 'unocss'
import presetAnimations from 'unocss-preset-animations'

export default defineConfig({
	presets: [
		presetWind4({
			preflights: {
				reset: true,
			},
		}),
		presetIcons({
			scale: 1.3,
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle',
			},
		}),
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Inter',
					weights: [400, 700],
				},
				serif: {
					name: 'Zilla Slab',
					weights: [400, 700],
				},
				mono: 'Fira Code',
			},
			processors: createLocalFontProcessor(),
		}),
		presetAnimations(),
	],
	transformers: [transformerVariantGroup()],
	shortcuts: {
		'container-inset': 'container mx-auto px-4',
	},
})
