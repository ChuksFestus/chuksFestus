"use client";
import { MutableRefObject, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "../text";
import { calibre, em, rem, sfMono } from "@/app/lib/utils";
import AboutCont from "./whatIdo";
import SplitType from "split-type";
import { backgroundPan } from "./keyframes";
import Magic from "./magic";

const Container = styled.section`
	--orange1: #ff790e;
	--orange2: #ff0ead;
	margin: 1rem 1.25rem;
	background: var(--not-white);
	border-radius: ${em(8)};
	padding: 1rem;
	padding-top: 2.5rem;
	min-height: calc(100vh - 2rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	// max-height: ${rem(1117)};
	@media (width <= 425px) {
		margin: 0.5rem;
		padding: 0.75rem;
		padding-top: 1.25rem;
		height: 100%;
	}
	.innerContainer {
		max-width: ${rem(1200)};
		margin: 0 auto;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: "100%";
		h6 {
			padding-bottom: ${rem(32)};
		}
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
	}
`;

gsap.registerPlugin(ScrollTrigger);

export default function About() {
	const magicRef = useRef(null);
	useMagicAnimation(magicRef);

	return (
		<Container>
			<div className="innerContainer" ref={magicRef}>
				<Text variant="h6" className={`${sfMono.className}`}>
					About Me
				</Text>
				<div>
					<Text
						variant="h2"
						className={`${calibre.className} h2`}
						style={{ paddingTop: 12, fontWeight: 600 }}
					>
						<span className="toAnimate">
							I&apos;m a <span className="blue">digital craftsman</span> who builds beautiful and
							functional user interfaces. I&apos;m <span>passionate </span> about creating
							experiences that are both{" "}
						</span>
						<Magic />
					</Text>
				</div>
				<AboutCont />
			</div>
		</Container>
	);
}

type TargetElement = HTMLElement;

const animateElement = (char: TargetElement) => {
	const text = new SplitType(char, { types: "chars,words" });
	gsap.from(text.chars, {
		scrollTrigger: {
			trigger: char,
			start: "top 80%",
			end: "top 20%",
			scrub: true,
			markers: false,
		},
		opacity: 0.2,
		stagger: 0.1,
	});
};

const useMagicAnimation = (magicRef: MutableRefObject<HTMLElement | null>) => {
	useLayoutEffect(() => {
		if (magicRef.current) {
			const splitTypes = magicRef.current.querySelectorAll<TargetElement>(".toAnimate");
			splitTypes.forEach(animateElement);
		}
	}, [magicRef]);
};
