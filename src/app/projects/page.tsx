"use client";

import styled from "styled-components";
import Image from "next/image";

import Navigation from "../ui/nav";
import { calibre, device, em, rem, sfMono } from "@/app/lib/utils";
import Text from "../ui/text";
import pic from "../../../public/edcentral2.png";
import wireframeLogin from "../../../public/wireframelogin.webp";
import wireframemap from "../../../public/wireframemap.webp";
import wireframelist from "../../../public/wireframelist.webp";
import wireframeImages from "../../../public/wireframeImages.webp";
import login from "../../../public/login.webp";
import edcentralHome from "../../../public/edcentralHome.webp";
import scholarships from "../../../public/scholaships.webp";
import scholarship from "../../../public/scholaship.webp";
import map from "../../../public/map.webp";
import countries from "../../../public/countries.webp";
import schools from "../../../public/schools.webp";
import school from "../../../public/school.webp";
import mockups from "../../../public/mockup.webp";
import Contact from "../ui/contact";

const Container = styled.section`
	margin: 1rem 1.25rem;
	background: var(--not-white);
	border-radius: 8px;
	padding: 1rem;
	padding-top: 2.5rem;
	height: auto;
	max-height: auto;
	@media (width <= 425px) {
		margin: 0.5rem;
		padding: 0.75rem;
		padding-top: 1.25rem;
	}
	.innerContainer {
		max-width: ${em(1200)};
		margin: 0 auto;
		height: 100%;
	}
	.mockup {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		img {
			max-width: 100%;
			height: auto;
		}
	}
`;

const Product = styled.div`
	padding-top: ${em(61)};
	.info {
		padding-top: ${em(40)};
		.title {
			color: var(--gray-3);
			padding-bottom: ${em(4)};
			border-bottom: 1px solid var(--gray-4);
			width: max-content;
		}
		.body {
			color: var(--not-black);
			font-weight: bold;
			padding-top: ${em(10)};
		}
	}
	img {
		width: 100%;
		height: 100%;
		margin-top: ${em(40)};
	}
	.dist {
		border-radius: 8px;
		background: #fff;
		padding: ${em(16)};
		box-shadow:
			0px 4px 8px 0px rgba(0, 0, 0, 0.06),
			0px 0px 4px 0px rgba(0, 0, 0, 0.04);
		margin: 0 auto;
		z-index: 99999;
		position: relative;
		color: hsla(0, 0%, 31%, 1);
		width: 100%;
		margin-top: 1rem;
		@media ${device.tablet} {
			width: ${em(600)};
			padding: ${em(40)};
			margin-top: ${em(-120)};
		}
		@media ${device.laptop} {
			width: ${em(903)};
		}
	}
`;

const Wireframe = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	@media ${device.laptop} {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	gap: ${em(20)};
	width: 100%;
	img {
		max-width: 100%;
		height: auto;
	}
`;

export default function Project() {
	return (
		<>
			<Container>
				<div className="innerContainer">
					<Navigation />
					<Product>
						<Text variant="h3" className={calibre.className}>
							Edcentral
						</Text>
						<div className="info">
							<Text variant="p" className={`${calibre.className} title`}>
								ROLE
							</Text>
							<Text variant="p" className={`${calibre.className} body`}>
								Design
							</Text>
						</div>
						<Image src={pic} alt="Image of Edcentral" priority />
						<div className="dist">
							<Text variant="h4" className={`${calibre.className}`}>
								Edcentral provides an efficient and seamless way to discover educational
								institutions, scholarships, and private tutors. The user-friendly interface allows
								individuals to input their location preferences or use geolocation for nearby
								options. With streamlined search functionality.
							</Text>
						</div>
					</Product>
				</div>
			</Container>
			<Container>
				<div className="innerContainer">
					<Wireframe>
						<Image src={wireframeLogin} alt="Image of Edcentral" priority />
						<Image src={wireframemap} alt="Image of Edcentral" priority />
						<Image src={wireframelist} alt="Image of Edcentral" priority />
						<Image src={wireframeImages} alt="Image of Edcentral" priority />
					</Wireframe>
				</div>
			</Container>
			<Container>
				<div className="innerContainer">
					<Wireframe>
						<Image src={login} alt="Image of Edcentral" priority />
						<Image src={edcentralHome} alt="Image of Edcentral" priority />
						<Image src={scholarships} alt="Image of Edcentral" priority />
						<Image src={scholarship} alt="Image of Edcentral" priority />
						<Image src={map} alt="Image of Edcentral" priority />
						<Image src={countries} alt="Image of Edcentral" priority />
						<Image src={schools} alt="Image of Edcentral" priority />
						<Image src={school} alt="Image of Edcentral" priority />
					</Wireframe>
				</div>
			</Container>
			<Container>
				<div className="innerContainer">
					<div className="mockup">
						<Image src={mockups} alt="Image of Edcentral" priority />
					</div>
				</div>
			</Container>
			<Contact />
		</>
	);
}
