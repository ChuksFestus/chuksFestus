import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { calibre, device, em, rem, sfMono } from "@/app/lib/utils";
import Text from "../text";

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
		height: 100%;
	}
	@media ${device.tablet} {
		height: calc(100vh - 2rem);
	}
	.innerContainer {
		max-width: ${rem(1200)};
		width: 100%;
		margin: 0 auto;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		h6 {
			padding-bottom: ${rem(32)};
		}
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(5, 1fr);
	gap: 1rem;
	height: 100%;
	a,
	div {
		border-radius: ${rem(12)};
		box-shadow:
			0px 8px 16px 0px rgba(0, 0, 0, 0.08),
			0px 0px 4px 0px rgba(0, 0, 0, 0.04);
		cursor: pointer;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: end;
		padding: 1rem;
		height: 284px;
		text-decoration: none;
		@media ${device.tablet} {
			height: 100%;
		}
		h6 {
			border-radius: 12px;
			background: var(--not-black);
			padding: 12px 24px;
			padding-bottom: 8px !important;
			color: var(--not-white);
			width: fit-content;
		}
	}
	.edcentral {
		grid-column: 1/11;
		background: url("/edcentral.svg") no-repeat center / cover;
		@media ${device.tablet} {
			grid-column: 1/5;
			grid-row: 1/4;
		}
	}
	.suregifts {
		grid-column: 1/11;
		background: url("/suregifts.svg") no-repeat center / cover;
		@media ${device.tablet} {
			grid-column: 1/5;
			grid-row: 4/6;
		}
	}
	.busha {
		grid-column: 1/11;
		background: url("/busha.svg") no-repeat center / cover;
		@media ${device.tablet} {
			grid-column: 5/9;
			grid-row: 1/3;
		}
	}
	.swwipe {
		grid-column: 1/11;
		background: url("/swwipe.svg") no-repeat center / cover;
		@media ${device.tablet} {
			grid-column: 5/9;
			grid-row: 3/6;
		}
	}
	.readycash {
		grid-column: 1/11;
		background: url("/secoura.svg") no-repeat center / cover;
		@media ${device.tablet} {
			grid-column: 9/11;
			grid-row: 1/6;
		}
	}
`;

export default function Works() {
	return (
		<Container>
			<div className="innerContainer">
				<Text variant="h6" className={`${sfMono.className}`}>
					Featured Projects
				</Text>
				<Grid>
					<Link href="/projects/edcentral" className="edcentral">
						<Text variant="h6" className={`${calibre.className}`}>
							edcentral
						</Text>
					</Link>
					<a target="_blank" href="https://www.swwipe.com/" className="swwipe">
						<Text variant="h6" className={`${calibre.className}`}>
							swwipe
						</Text>
					</a>
					<a target="_blank" href="https://suregifts.com.ng/" className="suregifts">
						<Text variant="h6" className={`${calibre.className}`}>
							suregifts
						</Text>
					</a>
					<a href="https://busha.co/" target="_blank" className="busha">
						<Text variant="h6" className={`${calibre.className}`}>
							busha
						</Text>
					</a>
					<a target="_blank" href="https://secoura.com/" className="readycash">
						<Text variant="h6" className={`${calibre.className}`}>
							secoura
						</Text>
					</a>
				</Grid>
			</div>
		</Container>
	);
}
