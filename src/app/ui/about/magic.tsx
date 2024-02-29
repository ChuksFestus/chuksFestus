import { useEffect } from "react";
import styled from "styled-components";
import { rotate, scale } from "./keyframes";

const MagicStyle = styled.span`
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
				fill: var(--pink);
			}
		}
	}
`;

const Star = () => {
	return (
		<span className="magic-star">
			<svg viewBox="0 0 512 512">
				<path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
			</svg>
		</span>
	);
};

interface StarElement extends HTMLElement {
	style: CSSStyleDeclaration;
}

export default function Magic() {
	useEffect(() => {
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

		startAnimation();

		const intervalId = setInterval(() => {
			startAnimation();
		}, interval);

		return () => {
			clearInterval(intervalId);
		};
	}, []);
	return (
		<MagicStyle>
			<Star />
			<Star />
			<Star />
			<span className="orange">visually stunning and easy to use</span>.
		</MagicStyle>
	);
}
