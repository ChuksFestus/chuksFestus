import { useState } from "react";
import styled from "styled-components";
import { calibre, rem, sfMono } from "@/app/lib/utils/index";
import Text from "../text";

const WhatIdo = styled.div`
	padding-top: ${rem(200)};

	details {
		border-top: 0.5px solid var(--gray-4);
		cursor: pointer;
		p {
			font-size: clamp(1.313rem, 0.795vw + 1.153rem, 1.75rem);
			line-height: clamp(1.969rem, 0.557vw + 1.857rem, 2.275rem);
			max-width: ${rem(1150)};
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
		transition: transform 0.2s ease-in-out;
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
	summary::-webkit-details-marker {
		display: none;
	}

	details summary {
		transition: margin 200ms ease-out;
	}

	details[open] summary {
		margin-bottom: 10px;
	}
`;

export default function AboutCont() {
	const [openDetails, setOpenDetails] = useState("frontend");

	const handleToggle = (event: React.SyntheticEvent<HTMLDetailsElement>, details: string) => {
		if (event.currentTarget.open) {
			setOpenDetails(details);
		} else if (openDetails === details) {
			event.preventDefault();
		}
	};

	return (
		<WhatIdo>
			<Text variant="h6" className={`${sfMono.className}`}>
				What I do
			</Text>
			<details
				open={openDetails === "frontend"}
				onToggle={(event) => handleToggle(event, "frontend")}
			>
				<summary>
					<Text variant="h3" className={`${calibre.className}`}>
						Frontend development
					</Text>
				</summary>
				<p className={`${calibre.className}`}>
					I shape the web with art and logic, Creating front end applications that are dynamic and
					ergonomic. I design, build, test and maintain with care and precision, Ensuring
					scalability and performance in every condition.
				</p>
			</details>
			<details open={openDetails === "mobile"} onToggle={(event) => handleToggle(event, "mobile")}>
				<summary>
					<Text variant="h3" className={`${calibre.className}`}>
						Mobile Development
					</Text>
				</summary>
				<p className={`${calibre.className}`}>
					I specialize in building cutting-edge applications that deliver a captivating user
					experience, ensuring that each mobile app is a testament to seamless functionality and
					aesthetic appeal. My focus on scalability and performance is unwavering, ensuring that
					users experience, top-notch responsiveness, and reliability on diverse mobile platforms.
				</p>
			</details>
			<details open={openDetails === "ui"} onToggle={(event) => handleToggle(event, "ui")}>
				<summary>
					<Text variant="h3" className={`${calibre.className}`}>
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
