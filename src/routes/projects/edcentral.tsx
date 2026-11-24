import { createFileRoute } from "@tanstack/react-router";
import * as stylex from "@stylexjs/stylex";

import Contact from "@/components/contact";
import Navigation from "@/components/nav";
import Text from "@/components/text";

const styles = stylex.create({
	container: {
		marginBlock: "1rem",
		marginInline: "1.25rem",
		backgroundColor: "var(--not-white)",
		borderRadius: "8px",
		padding: "1rem",
		paddingTop: "2.5rem",
		height: "auto",
		maxHeight: "auto",
		"@media (width <= 26.5625em)": {
			marginBlock: "0.5rem",
			marginInline: "0.5rem",
			padding: "0.75rem",
			paddingTop: "1.25rem",
		},
	},
	inner: {
		maxWidth: "75em",
		marginInline: "auto",
		height: "100%",
	},
	mockup: {
		display: "grid",
		gridTemplateColumns: "1fr",
		width: "100%",
	},
	mockupImg: {
		maxWidth: "100%",
		height: "auto",
	},
	product: {
		paddingTop: "3.8125em",
	},
	info: {
		paddingTop: "2.5em",
	},
	title: {
		color: "var(--gray-3)",
		paddingBottom: "0.25em",
		borderBottomWidth: "1px",
		borderBottomStyle: "solid",
		borderBottomColor: "var(--gray-4)",
		width: "max-content",
	},
	role: {
		color: "var(--not-black)",
		fontWeight: 600,
		paddingTop: "0.625em",
	},
	heroImg: {
		width: "100%",
		height: "100%",
		marginTop: "2.5em",
	},
	dist: {
		borderRadius: "8px",
		backgroundColor: "#fff",
		padding: "1em",
		boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.06), 0px 0px 4px 0px rgba(0, 0, 0, 0.04)",
		marginInline: "auto",
		zIndex: 99999,
		position: "relative",
		color: "hsla(0, 0%, 31%, 1)",
		width: "100%",
		marginTop: "1rem",
		"@media (width >= 48em)": {
			width: "37.5em",
			padding: "2.5em",
			marginTop: "-7.5em",
		},
		"@media (width >= 64em)": {
			width: "56.4375em",
		},
	},
	wireframe: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gap: "1.25em",
		width: "100%",
		"@media (width >= 64em)": {
			gridTemplateColumns: "1fr 1fr 1fr 1fr",
		},
	},
	wireframeImg: {
		maxWidth: "100%",
		height: "auto",
	},
});

type ProjectImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

const wireframes: ProjectImage[] = [
	{ src: "/wireframelogin.webp", alt: "Edcentral login wireframe", width: 581, height: 1243 },
	{ src: "/wireframemap.webp", alt: "Edcentral map wireframe", width: 581, height: 1243 },
	{ src: "/wireframelist.webp", alt: "Edcentral list wireframe", width: 581, height: 1243 },
	{ src: "/wireframeImages.webp", alt: "Edcentral images wireframe", width: 581, height: 1243 },
];

const screens: ProjectImage[] = [
	{ src: "/login.webp", alt: "Edcentral login screen", width: 570, height: 1155 },
	{ src: "/edcentralHome.webp", alt: "Edcentral home screen", width: 570, height: 1155 },
	{ src: "/scholaships.webp", alt: "Edcentral scholarships screen", width: 570, height: 1155 },
	{
		src: "/scholaship.webp",
		alt: "Edcentral scholarship details screen",
		width: 570,
		height: 1155,
	},
	{ src: "/map.webp", alt: "Edcentral map screen", width: 570, height: 1155 },
	{ src: "/countries.webp", alt: "Edcentral countries screen", width: 570, height: 1155 },
	{ src: "/schools.webp", alt: "Edcentral schools screen", width: 570, height: 1155 },
	{ src: "/school.webp", alt: "Edcentral school details screen", width: 570, height: 1155 },
];

export const Route = createFileRoute("/projects/edcentral")({
	head: () => ({
		meta: [
			{ title: "Edcentral — Chuks Festus" },
			{
				name: "description",
				content:
					"Edcentral provides an efficient and seamless way to discover educational institutions, scholarships, and private tutors.",
			},
		],
	}),
	component: Project,
});

function Project() {
	return (
		<>
			<section {...stylex.props(styles.container)}>
				<div {...stylex.props(styles.inner)}>
					<Navigation />
					<div {...stylex.props(styles.product)}>
						<Text variant="h3">Edcentral</Text>
						<div {...stylex.props(styles.info)}>
							<Text variant="p" xstyle={styles.title}>
								ROLE
							</Text>
							<Text variant="p" xstyle={styles.role}>
								Design
							</Text>
						</div>
						<img
							{...stylex.props(styles.heroImg)}
							src="/img/hero-1600.webp"
							srcSet="/img/hero-800.webp 800w, /img/hero-1600.webp 1600w, /img/hero-2000.webp 2000w"
							sizes="(min-width: 1200px) 1200px, 100vw"
							alt="Edcentral app screens"
							loading="eager"
							fetchPriority="high"
							decoding="async"
							width={2336}
							height={1236}
						/>
						<div {...stylex.props(styles.dist)}>
							<Text variant="h4">
								Edcentral provides an efficient and seamless way to discover educational
								institutions, scholarships, and private tutors. The user-friendly interface allows
								individuals to input their location preferences or use geolocation for nearby
								options. With streamlined search functionality.
							</Text>
						</div>
					</div>
				</div>
			</section>
			<section {...stylex.props(styles.container)}>
				<div {...stylex.props(styles.inner)}>
					<div {...stylex.props(styles.wireframe)}>
						{wireframes.map(({ src, alt, width, height }) => (
							<img
								key={src}
								{...stylex.props(styles.wireframeImg)}
								src={src}
								alt={alt}
								width={width}
								height={height}
								loading="lazy"
								decoding="async"
							/>
						))}
					</div>
				</div>
			</section>
			<section {...stylex.props(styles.container)}>
				<div {...stylex.props(styles.inner)}>
					<div {...stylex.props(styles.wireframe)}>
						{screens.map(({ src, alt, width, height }) => (
							<img
								key={src}
								{...stylex.props(styles.wireframeImg)}
								src={src}
								alt={alt}
								width={width}
								height={height}
								loading="lazy"
								decoding="async"
							/>
						))}
					</div>
				</div>
			</section>
			<section {...stylex.props(styles.container)}>
				<div {...stylex.props(styles.inner)}>
					<div {...stylex.props(styles.mockup)}>
						<img
							{...stylex.props(styles.mockupImg)}
							src="/img/mockup-1600.webp"
							alt="Edcentral device mockups"
							loading="lazy"
							decoding="async"
							width={2356}
							height={1436}
						/>
					</div>
				</div>
			</section>
			<Contact />
		</>
	);
}
