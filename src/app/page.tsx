"use client";

import Image from "next/image";
import Container from "@/component/container";

export default function Home() {
	return (
		<Container>
			<Image src="/logo.svg" alt="Chuks Festus Logo" width={39.08} height={32.87} priority />
		</Container>
	);
}
