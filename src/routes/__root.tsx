/// <reference types="vite/client" />
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "@/styles/app.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Chuks Festus" },
			{
				name: "description",
				content: "Fullstack product engineer, fullstack developer, and UI engineer.",
			},
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", href: "/favicon.ico" },
			{
				rel: "preload",
				href: "/fonts/CalibreRegular.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				href: "/fonts/CalibreSemibold.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			...(import.meta.env.DEV ? [{ rel: "stylesheet", href: "/virtual:stylex.css" } as const] : []),
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				{import.meta.env.DEV ? <script type="module" src="/virtual:stylex.js" /> : null}
				<Scripts />
			</body>
		</html>
	);
}
