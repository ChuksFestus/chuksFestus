import * as stylex from "@stylexjs/stylex";
import { Link } from "@tanstack/react-router";

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
			height: "100%",
		},
		"@media (width >= 48em)": {
			height: "calc(100vh - 2rem)",
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
	label: {
		paddingBottom: "2rem",
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat(10, 1fr)",
		gridTemplateRows: "repeat(5, 1fr)",
		gap: "1rem",
		height: "100%",
	},
	card: {
		position: "relative",
		isolation: "isolate",
		borderRadius: "0.75rem",
		boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.08), 0px 0px 4px 0px rgba(0, 0, 0, 0.04)",
		cursor: "pointer",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		justifyContent: "end",
		padding: "1rem",
		height: "284px",
		textDecoration: "none",
		"@media (width >= 48em)": {
			height: "100%",
		},
	},
	cardImage: {
		position: "absolute",
		inset: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
		zIndex: 0,
	},
	cardLabel: {
		position: "relative",
		zIndex: 1,
		fontWeight: 600,
		borderRadius: "12px",
		backgroundColor: "var(--not-black)",
		paddingTop: "12px",
		paddingInline: "24px",
		paddingBottom: "8px",
		color: "var(--not-white)",
		width: "fit-content",
	},
	edcentral: {
		gridColumnStart: "1",
		gridColumnEnd: "11",
		"@media (width >= 48em)": {
			gridColumnStart: "1",
			gridColumnEnd: "5",
			gridRowStart: "1",
			gridRowEnd: "4",
		},
	},
	suregifts: {
		gridColumnStart: "1",
		gridColumnEnd: "11",
		"@media (width >= 48em)": {
			gridColumnStart: "1",
			gridColumnEnd: "5",
			gridRowStart: "4",
			gridRowEnd: "6",
		},
	},
	busha: {
		gridColumnStart: "1",
		gridColumnEnd: "11",
		"@media (width >= 48em)": {
			gridColumnStart: "5",
			gridColumnEnd: "9",
			gridRowStart: "1",
			gridRowEnd: "3",
		},
	},
	swwipe: {
		gridColumnStart: "1",
		gridColumnEnd: "11",
		"@media (width >= 48em)": {
			gridColumnStart: "5",
			gridColumnEnd: "9",
			gridRowStart: "3",
			gridRowEnd: "6",
		},
	},
	readycash: {
		gridColumnStart: "1",
		gridColumnEnd: "11",
		"@media (width >= 48em)": {
			gridColumnStart: "9",
			gridColumnEnd: "11",
			gridRowStart: "1",
			gridRowEnd: "6",
		},
	},
});

function WorkImage({ name, wide = true }: { name: string; wide?: boolean }) {
	return (
		<img
			{...stylex.props(styles.cardImage)}
			src={`/img/works/${name}-1600.webp`}
			srcSet={`/img/works/${name}-800.webp 800w, /img/works/${name}-1600.webp 1600w`}
			sizes={wide ? "(min-width: 768px) 40vw, 100vw" : "(min-width: 768px) 20vw, 100vw"}
			alt=""
			loading="lazy"
			decoding="async"
		/>
	);
}

export default function Works() {
	return (
		<section {...stylex.props(styles.container)}>
			<div {...stylex.props(styles.inner)}>
				<Text variant="h6" font="sfmono" xstyle={styles.label}>
					Featured Projects
				</Text>
				<div {...stylex.props(styles.grid)}>
					<Link to="/projects/edcentral" {...stylex.props(styles.card, styles.edcentral)}>
						<WorkImage name="edcentral" />
						<Text variant="h6" xstyle={styles.cardLabel}>
							edcentral
						</Text>
					</Link>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.swwipe.com/"
						{...stylex.props(styles.card, styles.swwipe)}
					>
						<WorkImage name="swwipe" />
						<Text variant="h6" xstyle={styles.cardLabel}>
							swwipe
						</Text>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://suregifts.com.ng/"
						{...stylex.props(styles.card, styles.suregifts)}
					>
						<WorkImage name="suregifts" />
						<Text variant="h6" xstyle={styles.cardLabel}>
							suregifts
						</Text>
					</a>
					<a
						href="https://busha.co/"
						target="_blank"
						rel="noreferrer"
						{...stylex.props(styles.card, styles.busha)}
					>
						<WorkImage name="busha" />
						<Text variant="h6" xstyle={styles.cardLabel}>
							busha
						</Text>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://secoura.com/"
						{...stylex.props(styles.card, styles.readycash)}
					>
						<WorkImage name="secoura" wide={false} />
						<Text variant="h6" xstyle={styles.cardLabel}>
							secoura
						</Text>
					</a>
				</div>
			</div>
		</section>
	);
}
