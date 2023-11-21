import styled from "styled-components";

import Text from "./text";
import { calibre, sfMono } from "../lib/utils";

const Container = styled.div`
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
		}
	}
`;

export default function About() {
	return (
		<Container>
			<div className="innerContainer">
				<Text variant="h6" className={`${sfMono.className}`}>
					About Me
				</Text>
				<Text
					variant="h2"
					className={`${calibre.className}`}
					style={{ paddingTop: 12, fontWeight: 600 }}
				>
					I'm a <span className="blue">digital craftsman</span> who builds beautiful and functional
					user interfaces. I'm passionate about creating experiences that are both{" "}
					<span className="orange">visually stunning and easy to use</span>.
				</Text>
			</div>
		</Container>
	);
}
