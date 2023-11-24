import styled from "styled-components";
import { calibre, rem, sfMono } from "../lib/utils";
import Text from "./text";

const WhatIdo = styled.div`
	padding-top: ${rem(200)};

	details {
		border-top: 0.5px solid var(--gray-4);
		cursor: pointer;
		p {
			font-size: ${rem(38)};
			padding-bottom: ${rem(32)};
			color: hsla(0, 0%, 31%, 1);
		}
	}
	summary {
		position: relative;
	}
	summary::before,
	summary::after {
		content: "";
	}
	summary::before,
	summary::after {
		width: 0.75em;
		height: 0;
		border-bottom: 2px solid;
		position: absolute;
		top: calc(50% - 1px);
		right: 0;
		transform: translateY(-50%);
	}
	summary::after {
		transform: rotate(90deg);
		transform-origin: 50% 50%;
	}
	[open] summary::after {
		transform: rotate(0deg);
	}
	summary {
		padding: ${rem(20)} 0;
	}
	summary::marker {
		content: none;
	}
`;

export default function AboutCont() {
	return (
		<WhatIdo>
			<Text variant="h6" className={`${sfMono.className}`}>
				What I do
			</Text>
			<details>
				<summary>
					<Text variant="h2" className={`${calibre.className}`}>
						Frontend development
					</Text>
				</summary>
				<p className={`${calibre.className}`}>
					I shape the web with art and logic, Creating front end applications that are dynamic and
					ergonomic. I design, build, test and maintain with care and precision, Ensuring
					scalability and performance in every condition.
				</p>
			</details>
			<details>
				<summary>
					<Text variant="h2" className={`${calibre.className}`}>
						Mobile Development
					</Text>
				</summary>
				<p className={`${calibre.className}`}>
					I shape the web with art and logic, Creating front end applications that are dynamic and
					ergonomic. I design, build, test and maintain with care and precision, Ensuring
					scalability and performance in every condition.
				</p>
			</details>
			<details>
				<summary>
					<Text variant="h2" className={`${calibre.className}`}>
						UI/UX design
					</Text>
				</summary>
				<p className={`${calibre.className}`}>
					I shape the web with art and logic, Creating front end applications that are dynamic and
					ergonomic. I design, build, test and maintain with care and precision, Ensuring
					scalability and performance in every condition.
				</p>
			</details>
		</WhatIdo>
	);
}
