import { useEffect, useRef } from "react";
import * as stylex from "@stylexjs/stylex";

import Navigation from "@/components/nav";
import Text from "@/components/text";

import Socials from "./socials";

const styles = stylex.create({
	container: {
		marginBlock: "1rem",
		marginInline: "1.25rem",
		backgroundColor: "var(--not-white)",
		borderRadius: "8px",
		padding: "1rem",
		paddingTop: "2.5rem",
		height: "calc(100vh - 2rem)",
		maxHeight: "1117px",
		"@media (width <= 26.5625em)": {
			marginBlock: "0.5rem",
			marginInline: "0.5rem",
			padding: "0.75rem",
			paddingTop: "1.25rem",
		},
	},
	inner: {
		maxWidth: "75rem",
		marginInline: "auto",
		height: "100%",
	},
	contentLayout: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		gap: "1.25em",
		paddingTop: "2.5rem",
		overflow: "hidden",
		height: "calc(100% - 80px)",
		"@media (width >= 48em)": {
			paddingTop: 0,
			gap: "3.125em",
			display: "grid",
			gridTemplateColumns: "1fr 2fr",
		},
		"@media (width >= 64em)": {
			gridTemplateColumns: "1fr 1fr",
		},
	},
	content: {
		width: "100%",
	},
	portrait: {
		width: "100%",
		height: "100%",
		objectFit: "contain",
		objectPosition: "center",
		"@media (width >= 48em)": {
			height: "auto",
		},
	},
	h1: {
		textWrap: "nowrap",
		whiteSpace: "nowrap",
		fontWeight: 600,
		paddingTop: "0.125em",
	},
	intro: {
		fontWeight: 600,
	},
	role: {
		fontWeight: 500,
		color: "var(--dark-blue)",
	},
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Header() {
	const nameRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | null = null;
		let iteration = 0;

		const animateName = () => {
			if (interval) clearInterval(interval);

			interval = setInterval(() => {
				const currentRef = nameRef.current;

				if (!currentRef) return;

				const dataValue = currentRef.dataset?.value || "";
				const nextText = dataValue
					.split("")
					.map((_, index) => {
						if (index < iteration) {
							return dataValue[index];
						}
						return letters[Math.floor(Math.random() * 26)];
					})
					.join("");

				currentRef.innerText = nextText;

				if (iteration >= dataValue.length) {
					clearInterval(interval as ReturnType<typeof setInterval>);
				}
				iteration += 1 / 3;
			}, 30);
		};

		const handleMouseEnter = () => {
			iteration = 0;
			animateName();
		};

		const currentRef = nameRef.current;

		currentRef?.addEventListener("mouseenter", handleMouseEnter);
		animateName();

		return () => {
			if (interval) clearInterval(interval);
			currentRef?.removeEventListener("mouseenter", handleMouseEnter);
		};
	}, []);

	return (
		<section {...stylex.props(styles.container)}>
			<div {...stylex.props(styles.inner)}>
				<Navigation />
				<div {...stylex.props(styles.contentLayout)}>
					<div {...stylex.props(styles.content)}>
						<Text variant="h6" font="sfmono" xstyle={styles.intro}>
							Hello, I am
						</Text>
						<Text variant="h1" xstyle={styles.h1}>
							Chuks Festus
						</Text>
						<Text
							variant="h6"
							font="sfmono"
							xstyle={styles.role}
							ref={nameRef}
							data-value="Fullstack Product Engineer"
						>
							Fullstack Product Engineer
						</Text>
						<Socials />
					</div>
					<img
						{...stylex.props(styles.portrait)}
						src="/img/portrait-1150.webp"
						srcSet="/img/portrait-575.webp 575w, /img/portrait-1150.webp 1150w"
						sizes="(min-width: 1024px) 50vw, (min-width: 768px) 33vw, 100vw"
						alt="Chuks Festus"
						loading="eager"
						fetchPriority="high"
						decoding="async"
						width={1150}
						height={888}
					/>
				</div>
			</div>
		</section>
	);
}
