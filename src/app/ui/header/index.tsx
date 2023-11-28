import Image from "next/image";
import styled from "styled-components";

import Navigation from "../nav";
import Text from "../text";
import { calibre, device, em, rem, sfMono } from "@/app/lib/utils";
import pic from "../../../../public/chuksFestus.png";
import { useEffect, useRef } from "react";

import Socials from "./socials";

const Container = styled.section`
	margin: 1rem 1.25rem;
	background: var(--not-white);
	border-radius: 8px;
	padding: 1rem;
	padding-top: 2.5rem;
	height: calc(100vh - 2rem);
	max-height: 1117px;
	@media (width <= 425px) {
		margin: 0.5rem;
		padding: 0.75rem;
		padding-top: 1.25rem;
	}
	.innerContainer {
		max-width: ${rem(1200)};
		margin: 0 auto;
		height: 100%;
	}
`;

const InnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: ${em(20)};
	padding-top: ${rem(40)};
	overflow: hidden;
	height: calc(100% - 80px);
	.content {
		width: 100%;
	}
	@media ${device.tablet} {
		padding-top: 0;
		gap: ${em(50)};
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
	@media ${device.laptop} {
		grid-template-columns: 1fr 1fr;
	}
	.img {
		background: url("/chuksFestus.png");
		height: 100%;
		width: 100%;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		@media ${device.tablet} {
			display: none;
		}
	}
	.socials {
		padding-top: ${em(48)};
		display: flex;
		gap: ${em(16)};
		align-items: center;
		@media ${device.mobileS} {
			gap: ${em(28)};
		}
	}
	img {
		width: 100%;
		height: auto;
		display: none;
		@media ${device.tablet} {
			display: block;
		}
	}
`;

const H1 = styled(Text)`
	text-wrap: nowrap;
	white-space: nowrap;
	font-weight: 600;
	padding-top: ${em(2)};
`;

export default function Header() {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const nameRef = useRef<HTMLHeadingElement | null>(null);

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;
		let iteration = 0;

		const animateName = () => {
			interval = setInterval(() => {
				const currentRef = nameRef.current;

				if (currentRef) {
					const dataValue = currentRef.dataset?.value || "";
					const nextText = dataValue
						.split("")
						.map((_, index) => {
							if (index < iteration) {
								return dataValue[index];
							}
							return letters[Math.floor(Math.random() * 26)];
						})
						.join("");

					currentRef.innerText = nextText;

					if (iteration >= dataValue.length) {
						clearInterval(interval as NodeJS.Timeout);
					}
					iteration += 1 / 3;
				}
			}, 30);
		};

		const handleMouseEnter = () => {
			animateName();
		};

		const currentRef = nameRef.current;

		if (currentRef) {
			currentRef.addEventListener("mouseenter", handleMouseEnter);
		}

		animateName();

		return () => {
			if (interval) {
				clearInterval(interval);
			}

			if (currentRef) {
				currentRef.removeEventListener("mouseenter", handleMouseEnter);
			}
		};
	}, []);

	return (
		<Container>
			<div className="innerContainer">
				<Navigation />
				<InnerContainer>
					<div className="content">
						<Text variant="h6" className={`${sfMono.className}`} style={{ fontWeight: 600 }}>
							Hello, I am
						</Text>
						<H1 variant="h1" className={`${calibre.className}`}>
							Chuks Festus
						</H1>
						<Text
							variant="h6"
							className={`${sfMono.className}`}
							style={{ fontWeight: 500, color: "var(--dark-blue)" }}
							ref={nameRef}
							data-value="UI Designer & Frontend developer"
						>
							UI Designer & Frontend developer
						</Text>
						<Socials />
					</div>
					<div className="img"></div>
					<Image
						src={pic}
						alt="Image of Chuks Festus"
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</InnerContainer>
			</div>
		</Container>
	);
}
