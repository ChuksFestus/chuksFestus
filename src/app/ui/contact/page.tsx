/* eslint-disable react/no-unescaped-entities */
"use client";
import styled from "styled-components";

import Text from "../text";
import { calibre, device, em, rem, sfMono } from "@/app/lib/utils";
import pic from "../../../../public/chuks.png";
import Image from "next/image";

const Container = styled.section`
	margin: 1rem 1.25rem;
	background: var(--not-white);
	border-radius: ${em(8)};
	padding: 1rem;
	padding-top: 2.5rem;
	height: calc(100vh - 2rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (width <= 425px) {
		margin: 0.5rem;
		padding: 0.75rem;
		padding-top: 1.25rem;
	}
	@media ${device.mobileS} {
		height: 60vh;
	}
	@media ${device.tablet} {
		height: 90vh;
	}
	.innerContainer {
		max-width: ${rem(1200)};
		width: 100%;
		margin: 0 auto;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		h1 {
			display: flex;
			flex-direction: column;
			padding-bottom: 5rem;
			@media ${device.tablet} {
				padding-bottom: 0;
			}
			.withPic {
				display: flex;
				gap: 0.5rem;
				align-items: baseline;
			}
		}
		.lower {
			display: grid;
			grid-template-columns: 1fr auto;
			justify-content: center;
			align-items: center;
			position: relative;
			.stripe {
				width: 100%;
				height: 1px;
				background: hsla(0, 0%, 74%, 1);
				display: grid;
				grid-row: 1;
				grid-column: span 2;
			}
			.touch {
				background: var(--not-black);
				color: var(--not-white);
				width: 166px;
				height: 166px;
				border-radius: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				grid-row: 1;
				position: absolute;
				right: 5rem;
				cursor: pointer;
				h6 {
					text-wrap: nowrap;
					font-size: 1rem;
					font-weight: 400;
				}
			}
		}
	}
`;

export default function Contact() {
	return (
		<Container>
			<div className="innerContainer">
				<Text variant="h1" className={`${calibre.className}`}>
					<span className="withPic">
						<Image
							src={pic}
							alt="Image of Chuks Festus"
							priority
							style={{ width: 65, height: 63 }}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
						<span>Let's work</span>
					</span>
					<span style={{ marginTop: "-24px" }}>together</span>
				</Text>
				<div className="lower">
					<div className="stripe"></div>
					<div className={`touch ${sfMono.className}`}>
						<Text variant="h6" className={`${sfMono.className}`}>
							Get in touch
						</Text>
					</div>
				</div>
			</div>
		</Container>
	);
}
