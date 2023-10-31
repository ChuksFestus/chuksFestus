import styled from "styled-components";
import Navigation from "./nav";
import Image from "next/image";
import pic from "../../public/chuksFestus.png";
import { device, em, rem } from "@/utils";
import Text from "./text";

// const Container = styled.div`
// 	display: grid;
// 	align-items: center;
// 	height: calc(100% - 80px);
// 	grid-template-columns: 1fr;
// 	padding-top: 40px;
// 	gap: ${em(50)};
// 	overflow: hidden;
// 	@media ${device.tablet} {
// 		display: flex;
// 		flex-direction: column;
// 		gap: 20px;
// 	}
// 	img {
// 		width: 100%;
// 		height: auto;
// 		@media ${device.mobileL} {
// 			width: auto;
// 			height: 100%;
// 		}
// 		@media ${device.laptop} {
// 			width: 100%;
// 			height: auto;
// 			object-fit: contain;
// 		}
// 	}
// 	@media ${device.laptop} {
// 		padding-top: 0;
// 		grid-template-columns: 1fr 1fr;
// 	}
// 	@media ${device.laptopL} {
// 		grid-template-columns: 1fr ${em(587)};
// 	}
// `;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: ${em(20)};
	padding-top: 40px;
	overflow: hidden;
	height: calc(100% - 80px);
	@media ${device.tablet} {
		padding-top: 0;
		gap: ${em(50)};
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
	@media ${device.laptop} {
		grid-template-columns: 1fr 1fr;
	}
	.img {
		background: url("/chuksFestus.png");
		height: 100%;
		width: 100%;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		@media ${device.tablet} {
			display: none;
		}
	}
	.socials {
		padding-top: ${em(48)};
		display: flex;
		gap: ${em(28)};
		align-items: center;
	}
	img {
		width: 100%;
		height: auto;
		display: none;
		@media ${device.tablet} {
			display: block;
		}
	}
`;

const Head = styled.header`
	height: 100%;
	.hello {
		font-family: "SF Mono";
		font-weight: 600;
	}
	.h1 {
		text-wrap: nowrap;
		font-family: "calibre";
		font-weight: 600;
		padding-top: ${em(2)};
	}
	.dis {
		font-family: "SF Mono";
		font-weight: 500;
		color: var(--dark-blue);
	}
`;

export default function Header() {
	return (
		<Head>
			<Navigation />
			<Container>
				<div style={{ width: "min-content" }}>
					<Text kind="h6" className="hello">
						Hello, I am
					</Text>
					<Text kind="h1" className="h1">
						Chuks Festus
					</Text>
					<Text kind="h6" className="dis">
						UI Designer & Frontend developer
					</Text>
					<div className="socials">
						<svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" fill="none">
							<path
								fill="#052E40"
								d="M13.113 0C5.868-.003 0 5.862 0 13.102c0 5.724 3.67 10.59 8.783 12.378.689.172.583-.317.583-.65v-2.271c-3.975.465-4.137-2.165-4.403-2.605-.54-.92-1.814-1.154-1.433-1.594.906-.465 1.828.117 2.898 1.697.773 1.145 2.282.952 3.047.761a3.695 3.695 0 0 1 1.016-1.78c-4.119-.74-5.836-3.253-5.836-6.241 0-1.45.478-2.783 1.415-3.859-.597-1.772.056-3.29.144-3.515 1.702-.152 3.472 1.219 3.61 1.327.966-.26 2.07-.398 3.307-.398 1.242 0 2.35.143 3.325.407.331-.252 1.972-1.43 3.554-1.286.085.225.723 1.708.16 3.457.95 1.078 1.433 2.422 1.433 3.876 0 2.994-1.728 5.51-5.859 6.237a3.733 3.733 0 0 1 1.116 2.666v3.296c.024.264 0 .524.44.524 5.188-1.749 8.924-6.65 8.924-12.425C26.224 5.862 20.352 0 13.114 0Z"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
							<path
								fill="#052E40"
								d="M21.554 0H1.884C.844 0 0 .844 0 1.884v19.67c0 1.04.844 1.884 1.884 1.884h19.67c1.04 0 1.884-.844 1.884-1.884V1.884C23.438.844 22.593 0 21.553 0Zm0 21.563a16502.2 16502.2 0 0 1-19.679-.01c.003-13.118.006-19.678.009-19.678 13.119.003 19.678.006 19.678.009-.002 13.119-.005 19.678-.008 19.678ZM3.474 8.786h3.478v11.186H3.475V8.786Zm1.74-1.53a2.017 2.017 0 0 0 1.426-3.44 2.016 2.016 0 1 0-1.425 3.44Zm7.392 7.181c0-1.458.279-2.87 2.086-2.87 1.782 0 1.808 1.666 1.808 2.964v5.44h3.475v-6.134c0-3.012-.65-5.33-4.17-5.33-1.69 0-2.824.93-3.29 1.808h-.046V8.786H9.132v11.186h3.474v-5.535Z"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" fill="none">
							<path
								fill="#052E40"
								d="M22.336 2.107a8.843 8.843 0 0 1-2.557.694A4.463 4.463 0 0 0 21.732.33a8.72 8.72 0 0 1-2.818 1.082A4.43 4.43 0 0 0 17.438.364a4.395 4.395 0 0 0-1.769-.367c-2.46 0-4.44 2.013-4.44 4.483 0 .347.042.693.11 1.027A12.583 12.583 0 0 1 2.181.817a4.48 4.48 0 0 0-.604 2.262c0 1.556.784 2.927 1.98 3.734a4.449 4.449 0 0 1-2.009-.57v.055a4.472 4.472 0 0 0 3.56 4.399c-.382.1-.775.151-1.17.152-.288 0-.562-.029-.838-.068a4.454 4.454 0 0 0 4.151 3.108 8.85 8.85 0 0 1-5.513 1.916c-.372 0-.716-.013-1.072-.055a12.493 12.493 0 0 0 6.82 2.01c8.166 0 12.635-6.827 12.635-12.752 0-.195 0-.389-.013-.583a9.612 9.612 0 0 0 2.227-2.318Z"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
							<path
								fill="#052E40"
								d="M10.963 7.204c-1.912 0-3.472 1.574-3.472 3.503 0 1.928 1.56 3.502 3.472 3.502 1.911 0 3.471-1.574 3.471-3.502 0-1.929-1.56-3.503-3.471-3.503Zm10.411 3.503c0-1.45.013-2.888-.068-4.336-.08-1.682-.46-3.174-1.68-4.404C18.407.735 16.93.354 15.263.272 13.825.191 12.4.204 10.965.204c-1.437 0-2.862-.013-4.297.068-1.666.082-3.145.465-4.364 1.695C1.082 3.2.704 4.69.624 6.371.544 7.821.556 9.26.556 10.707c0 1.447-.013 2.887.068 4.335.08 1.682.461 3.174 1.68 4.404 1.221 1.232 2.698 1.613 4.364 1.695 1.438.081 2.862.068 4.297.068 1.438 0 2.862.013 4.297-.068 1.667-.081 3.146-.465 4.365-1.695 1.221-1.232 1.599-2.722 1.68-4.404.083-1.448.067-2.885.067-4.335Zm-10.411 5.389c-2.956 0-5.341-2.407-5.341-5.39 0-2.982 2.385-5.389 5.34-5.389 2.956 0 5.342 2.407 5.342 5.39 0 2.982-2.386 5.389-5.341 5.389Zm5.56-9.74c-.69 0-1.248-.563-1.248-1.26 0-.696.557-1.258 1.248-1.258.69 0 1.247.562 1.247 1.259a1.265 1.265 0 0 1-.365.89 1.246 1.246 0 0 1-.882.368Z"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="none">
							<path
								fill="#052E40"
								d="M11.389.203C5.415.203.556 5.106.556 11.134s4.859 10.931 10.833 10.931 10.833-4.903 10.833-10.93C22.222 5.105 17.363.202 11.39.202Zm7.164 5.04a9.332 9.332 0 0 1 2.089 5.818c-.305-.066-3.365-.691-6.443-.3-.065-.16-.13-.32-.198-.48a28.71 28.71 0 0 0-.615-1.354c3.42-1.411 4.972-3.416 5.167-3.684ZM11.39 1.811c2.352 0 4.5.891 6.133 2.352-.167.24-1.56 2.128-4.85 3.374A49.483 49.483 0 0 0 9.22 2.071a9.142 9.142 0 0 1 2.169-.26ZM7.454 2.7a59.115 59.115 0 0 1 3.43 5.4c-4.328 1.16-8.14 1.143-8.555 1.138a9.361 9.361 0 0 1 5.125-6.538Zm-5.318 8.448c0-.094.003-.191.006-.286.403.008 4.888.066 9.51-1.33.266.523.518 1.054.75 1.585-.122.034-.245.07-.365.11-4.773 1.561-7.312 5.805-7.523 6.165a9.352 9.352 0 0 1-2.378-6.244Zm9.253 9.336a9.146 9.146 0 0 1-5.68-1.97c.167-.345 2.04-3.994 7.258-5.831l.06-.021c1.3 3.405 1.836 6.261 1.974 7.081a9.057 9.057 0 0 1-3.612.741Zm5.17-1.595c-.095-.567-.587-3.3-1.798-6.656 2.901-.467 5.448.3 5.763.4a9.35 9.35 0 0 1-3.966 6.256Z"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="26" fill="none">
							<path
								stroke="#052E40"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2.222"
								d="M1.444 5.23c0-1.04.41-2.039 1.14-2.774a3.871 3.871 0 0 1 2.75-1.15h3.888v7.848H5.333a3.871 3.871 0 0 1-2.75-1.15A3.942 3.942 0 0 1 1.444 5.23ZM9.222 1.306h3.89a3.859 3.859 0 0 1 2.749 1.15A3.926 3.926 0 0 1 17 5.23a3.953 3.953 0 0 1-1.14 2.775 3.887 3.887 0 0 1-2.749 1.15H9.222V1.305Z"
							/>
							<path
								stroke="#052E40"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2.222"
								d="M9.222 13.078a3.955 3.955 0 0 1 1.14-2.774 3.886 3.886 0 0 1 2.75-1.15 3.859 3.859 0 0 1 2.749 1.15 3.953 3.953 0 0 1 0 5.55A3.886 3.886 0 0 1 13.11 17a3.86 3.86 0 0 1-2.75-1.15 3.926 3.926 0 0 1-1.139-2.774v0ZM1.444 20.926c0-1.04.41-2.039 1.14-2.775a3.872 3.872 0 0 1 2.75-1.149h3.888v3.924c0 1.04-.41 2.039-1.139 2.775a3.871 3.871 0 0 1-2.75 1.149 3.871 3.871 0 0 1-2.75-1.15 3.942 3.942 0 0 1-1.139-2.774Z"
							/>
							<path
								stroke="#052E40"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2.222"
								d="M1.444 13.078c0-1.04.41-2.039 1.14-2.774a3.871 3.871 0 0 1 2.75-1.15h3.888v7.848H5.333a3.871 3.871 0 0 1-2.75-1.15 3.942 3.942 0 0 1-1.139-2.774Z"
							/>
						</svg>
					</div>
				</div>
				<div className="img"></div>
				<Image
					src={pic}
					alt="Image of Chuks Festus"
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</Container>
		</Head>
	);
}
