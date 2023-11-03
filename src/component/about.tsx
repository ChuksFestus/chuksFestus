import { calibre, sfMono } from "@/utils";
import Text from "./text";
import styled from "styled-components";

const Div = styled.div`
	h2 {
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
		<Div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				height: "100%",
			}}
		>
			<Text kind="h6" className={`${sfMono.className}`}>
				About Me
			</Text>
			<Text
				kind="h2"
				className={`${calibre.className}`}
				style={{ paddingTop: 12, fontWeight: 600 }}
			>
				I'm a <span className="blue">digital craftsman</span> who builds beautiful and functional
				user interfaces. I'm passionate about creating experiences that are both{" "}
				<span className="orange">visually stunning and easy to use</span>.
			</Text>
		</Div>
	);
}
