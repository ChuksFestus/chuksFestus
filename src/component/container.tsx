"use client";

import styled from "styled-components";

const Main = styled.main`
	margin: 1rem 1.25rem;
	background: var(--not-white);
	border-radius: 8px;
	padding: 1rem;
	height: calc(100vh - 2rem);
	@media (width <= 425px) {
		margin: 0.5rem;
		padding: 0.75rem;
		padding-top: 1.25rem;
	}
`;

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Main>{children}</Main>
		</>
	);
}
