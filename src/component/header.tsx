import styled from "styled-components";
import Navigation from "./nav";
import Image from "next/image";
import pic from "../../public/chuksFestus.png";
import { rem } from "@/utils";

const Container = styled.div`
	display: grid;
	align-items: center;
	height: calc(100% - 80px);
	grid-template-columns: 1fr 575px;
	gap: ${rem(50)};
	@media (width <= 991px) {
		grid-template-columns: 1fr;
	}
`;

const Head = styled.header`
	height: 100%;
	& p {
		font-size: clamp(1rem, 1.336vw + 0.645rem, 1.5rem);
		line-height: clamp(1.5rem, 1.202vw + 1.181rem, 1.95rem);
	}
	& h1 {
		font-size: clamp(3.188rem, 7.513vw + 1.192rem, 6rem);
		line-height: clamp(4.781rem, 8.063vw + 2.639rem, 7.8rem);
		text-wrap: nowrap;
	}
`;

export default function Header() {
	return (
		<Head>
			<Navigation />
			{/*<Container>
				<div>
					<p style={{ fontFamily: "SF Mono", fontWeight: 600 }}>Hello, I am</p>
					<h1 style={{ fontFamily: "calibre", fontWeight: 600, paddingTop: 8, paddingBottom: 8 }}>
						Chuks Festus
					</h1>
					<p style={{ fontFamily: "SF Mono", fontWeight: 500, color: "var(--dark-blue)" }}>
						UI Designer & Frontend developer
					</p>
				</div>
				<Image
					src={pic}
					alt="Image of Chuks Festus"
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
			</Container>*/}
		</Head>
	);
}
