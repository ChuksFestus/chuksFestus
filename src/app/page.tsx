"use client";

import About from "@/component/about";
import Container from "@/component/container";
import Header from "@/component/header";

export default function Home() {
	return (
		<>
			<Container>
				<Header />
			</Container>
			<Container>
				<About />
			</Container>
		</>
	);
}
