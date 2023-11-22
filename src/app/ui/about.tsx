import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import Text from "./text";
import { calibre, sfMono } from "../lib/utils";

const backgroundPan = keyframes`
 from {
    background-position: 0% center;
  }
  
  to {
    background-position: -200% center;
  }
`;

const scale = keyframes`
  from, to {
    transform: scale(0);
  }
  
  50% {
    transform: scale(1);
  }
`;

const rotate = keyframes`
	from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(180deg);
  }
`;

const Container = styled.div`
	--orange1: #ff790e;
	--orange2: #ff0ead;
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
		height: 100%;
	}
	.innerContainer {
		max-width: 1200px;
		margin: 0 auto;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: "100%";
		.blue {
			background: -webkit-linear-gradient(0deg, #5c02ff 0%, #21005c 102.56%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		.orange {
			background: -webkit-linear-gradient(0deg, #ff790e 0%, #ff0ead 102.56%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			animation: ${backgroundPan} 3s linear infinite;
			background-size: 200%;
		}
		.magic {
			display: inline-block;
			position: relative;
			.magic-star {
				--size: clamp(20px, 1.5vw, 30px);

				animation: ${scale} 700ms ease forwards;
				display: block;
				height: var(--size);
				left: var(--star-left);
				position: absolute;
				top: var(--star-top);
				width: var(--size);
				svg {
					animation: ${rotate} 1000ms linear infinite;
					display: block;
					opacity: 0.7;
					path {
						fill: var(--orange1);
					}
				}
			}
		}
	}
`;

interface StarElement extends HTMLElement {
	style: CSSStyleDeclaration;
}

export default function About() {
	useEffect(() => {
		let index = 0;
		const interval = 1000;
		const stars = Array.from(document.getElementsByClassName("magic-star")) as StarElement[];

		const rand = (min: number, max: number): number =>
			Math.floor(Math.random() * (max - min + 1)) + min;

		const animate = (star: StarElement): void => {
			star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
			star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

			star.style.animation = "none";
			star.offsetHeight;
			star.style.animation = "";
		};

		const startAnimation = (): void => {
			for (const star of stars) {
				animate(star);
			}
		};

		startAnimation(); // Initial animation

		const intervalId = setInterval(() => {
			startAnimation(); // Repeat animation after the interval
		}, interval);

		return () => {
			clearInterval(intervalId); // Clean up the interval on component unmount
		};
	}, []); // Empty dependency array to run the effect only once on mount
	return (
		<Container>
			<div className="innerContainer">
				<Text variant="h6" className={`${sfMono.className}`}>
					About Me
				</Text>
				<Text
					variant="h2"
					className={`${calibre.className} magic`}
					style={{ paddingTop: 12, fontWeight: 600 }}
				>
					I&apos;m a <span className="blue">digital craftsman</span> who builds beautiful and
					functional user interfaces. I&apos;m passionate about creating experiences that are both{" "}
					<span className="magic">
						<span className="magic-star">
							<svg viewBox="0 0 512 512">
								<path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
							</svg>
						</span>
						<span className="magic-star">
							<svg viewBox="0 0 512 512">
								<path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
							</svg>
						</span>
						<span className="magic-star">
							<svg viewBox="0 0 512 512">
								<path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
							</svg>
						</span>
						<span className="orange">visually stunning and easy to use</span>.
					</span>
				</Text>
			</div>
		</Container>
	);
}
