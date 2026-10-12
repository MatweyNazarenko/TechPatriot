import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/

const manifest = {
	theme_color: '#42bc15',
	background_color: '#b1d8b8',
	icons: [
		{
			purpose: 'maskable',
			sizes: '512x512',
			src: 'icon512_maskable.png',
			type: 'image/png',
		},
		{
			purpose: 'any',
			sizes: '512x512',
			src: 'icon512_rounded.png',
			type: 'image/png',
		},
	],
	orientation: 'any',
	display: 'standalone',
	dir: 'auto',
	lang: 'ru',
	name: 'TechPatriot',
	short_name: 'techpatriot',
};

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: [
					'**/*{html, css, scss, js, ico, webp, png, svg, jpg}',
				],
			},
			manifest: manifest,
		}),
	],
	base: '/',
});
