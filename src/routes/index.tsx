import { createFileRoute } from "@tanstack/react-router";

import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Works from "@/components/works";

export const Route = createFileRoute("/")({
	head: () => ({
		links: [
			{
				rel: "preload",
				href: "/fonts/SFMono-Medium.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				href: "/fonts/SFMono-Semibold.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
		],
	}),
	component: Home,
});

function Home() {
	return (
		<>
			<Header />
			<About />
			<Works />
			<Contact />
		</>
	);
}
