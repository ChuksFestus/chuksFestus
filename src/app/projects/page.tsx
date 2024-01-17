"use client";

import styled from "styled-components";
import Image from "next/image";

import Navigation from "../ui/nav";
import { calibre, device, em, rem, sfMono } from "@/app/lib/utils";
import Text from "../ui/text";
import pic from "../../../public/edcentral2.png";

const Container = styled.section`
	margin: 1rem 1.25rem;
	background: var(--not-white);
	border-radius: 8px;
	padding: 1rem;
	padding-top: 2.5rem;
	height: auto;
	max-height: 1117px;
	@media (width <= 425px) {
		margin: 0.5rem;
		padding: 0.75rem;
		padding-top: 1.25rem;
	}
	.innerContainer {
		max-width: ${em(1200)};
		margin: 0 auto;
		height: 100%;
	}
`;

const Product = styled.div`
	padding-top: ${em(61)};
	.info {
		padding-top: ${em(40)};
		.title {
			color: var(--gray-3);
			padding-bottom: ${em(4)};
			border-bottom: 1px solid var(--gray-4);
			width: max-content;
		}
		.body {
			color: var(--not-black);
			font-weight: bold;
			padding-top: ${em(10)};
		}
	}
	img {
		width: 100%;
		height: 618px;
		margin-top: ${em(40)};
	}
`;

export default function Project() {
	return (
		<Container>
			<div className="innerContainer">
				<Navigation />
				<Product>
					<Text variant="h3" className={calibre.className}>
						Edcentral
					</Text>
					<div className="info">
						<Text variant="p" className={`${calibre.className} title`}>
							ROLE
						</Text>
						<Text variant="p" className={`${calibre.className} body`}>
							Design
						</Text>
					</div>
					<Image src={pic} alt="Image of Edcentral" priority />
				</Product>
			</div>
		</Container>
	);
}
