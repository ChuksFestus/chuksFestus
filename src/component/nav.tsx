"use client";

import styled from "styled-components";
import Image from "next/image";
import { device, em } from "@/utils";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& img {
		width: ${em(62)};
		height: ${em(52)};
	}
	@media ${device.tablet} {
		& svg {
			display: none;
		}
		& img {
			width: ${em(97.15)};
			height: ${em(80.2)};
		}
	}
`;

export default function Navigation() {
	return (
		<Nav>
			<Image src="/logo.svg" alt="Chuks Festus Logo" width={97.15} height={80.2} priority />
			<svg
				width="38"
				height="39"
				viewBox="0 0 38 39"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M34.9064 21.0914C34.9064 22.8411 33.5294 24.244 31.8121 24.244H7.05768C6.23702 24.244 5.44997 23.9119 4.86968 23.3206C4.28938 22.7294 3.96338 21.9275 3.96338 21.0914C3.96338 20.2552 4.28938 19.4533 4.86968 18.8621C5.44997 18.2708 6.23702 17.9387 7.05768 17.9387H20.982L24.8499 21.0914L28.7178 17.9387H31.8121C32.6328 17.9387 33.4198 18.2708 34.0001 18.8621C34.5804 19.4533 34.9064 20.2552 34.9064 21.0914ZM19.4349 5.32788C5.51053 5.32788 5.51053 14.786 5.51053 14.786H33.3593C33.3593 14.786 33.3593 5.32788 19.4349 5.32788ZM5.51053 28.9731C5.51053 31.5898 7.58371 33.7021 10.152 33.7021H28.7178C31.2861 33.7021 33.3593 31.5898 33.3593 28.9731V27.3967H5.51053V28.9731Z"
					fill="#052E40"
				/>
			</svg>
		</Nav>
	);
}
