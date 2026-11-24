import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import * as stylex from "@stylexjs/stylex";
import { motion } from "motion/react";

import Text from "@/components/text";

const styles = stylex.create({
	container: {
		marginBlock: "1rem",
		marginInline: "1.25rem",
		backgroundColor: "var(--not-white)",
		borderRadius: "0.5em",
		padding: "1rem",
		paddingTop: "2.5rem",
		height: "calc(100vh - 2rem)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		"@media (width <= 26.5625em)": {
			marginBlock: "0.5rem",
			marginInline: "0.5rem",
			padding: "0.75rem",
			paddingTop: "1.25rem",
		},
		"@media (width >= 20em)": {
			height: "60vh",
		},
		"@media (width >= 48em)": {
			height: "90vh",
		},
	},
	inner: {
		maxWidth: "75rem",
		width: "100%",
		marginInline: "auto",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	},
	h1: {
		display: "flex",
		flexDirection: "column",
		paddingBottom: "5rem",
		"@media (width >= 48em)": {
			paddingBottom: 0,
		},
	},
	withPic: {
		display: "flex",
		gap: "0.5rem",
		alignItems: "baseline",
	},
	together: {
		marginTop: "-24px",
	},
	lower: {
		display: "grid",
		gridTemplateColumns: "1fr auto",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	stripe: {
		width: "100%",
		height: "1px",
		backgroundColor: "hsla(0, 0%, 74%, 1)",
		display: "grid",
		gridRow: 1,
		gridColumn: "span 2",
	},
	touch: {
		backgroundColor: "var(--not-black)",
		color: "var(--not-white)",
		width: "166px",
		height: "166px",
		borderRadius: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gridRow: 1,
		position: "absolute",
		right: "5rem",
		cursor: "pointer",
	},
	touchLink: {
		textDecoration: "none",
		color: "var(--not-white)",
	},
	touchLabel: {
		textWrap: "nowrap",
		fontSize: "1rem",
		fontWeight: 500,
	},
	pic: {
		width: 65,
		height: 63,
	},
});

export default function Contact() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = e;
		if (ref.current) {
			const { width, height, left, top } = ref.current.getBoundingClientRect();
			const x = clientX - (left + width / 2);
			const y = clientY - (top + height / 2);
			setPosition({ x, y });
		}
	};

	const mouseLeave = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;

	return (
		<section {...stylex.props(styles.container)}>
			<div {...stylex.props(styles.inner)}>
				<Text variant="h1" xstyle={styles.h1}>
					<span {...stylex.props(styles.withPic)}>
						<img
							{...stylex.props(styles.pic)}
							src="/img/avatar-136.webp"
							alt="Chuks Festus"
							loading="lazy"
							decoding="async"
							width={136}
							height={132}
						/>
						<span>Let&apos;s work</span>
					</span>
					<span {...stylex.props(styles.together)}>together</span>
				</Text>
				<div {...stylex.props(styles.lower)}>
					<div {...stylex.props(styles.stripe)} />
					<motion.div
						{...stylex.props(styles.touch)}
						animate={{ x, y }}
						onMouseMove={mouseMove}
						onMouseLeave={mouseLeave}
						ref={ref}
					>
						<a href="mailto:hello@chuksfestus.dev" {...stylex.props(styles.touchLink)}>
							<Text variant="h6" font="sfmono" xstyle={styles.touchLabel}>
								Get in touch
							</Text>
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
