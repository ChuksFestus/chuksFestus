import stylex from "@stylexjs/unplugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const stylexPlugin = stylex({
	useCSSLayers: {
		before: ["reset", "base"],
		prefix: "stylex",
	},
});

stylexPlugin.enforce = "pre";

export default defineConfig({
	server: {
		port: 3000,
	},
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		stylexPlugin,
		tanstackStart({
			srcDirectory: "src",
			prerender: {
				enabled: true,
				crawlLinks: true,
				failOnError: true,
			},
		}),
		viteReact(),
	],
});
