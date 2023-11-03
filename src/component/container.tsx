"use client";

import styled from "styled-components";

const Main = styled.div`
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
	}
	.innerContainer {
		max-width: 1200px;
		margin: 0 auto;
		height: 100%;
	}
`;

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Main>
				<div className="innerContainer">{children}</div>
			</Main>
		</>
	);
}
