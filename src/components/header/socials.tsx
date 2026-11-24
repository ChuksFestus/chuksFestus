import * as stylex from "@stylexjs/stylex";

import {
	DribbbleIcon,
	FigmaIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "@/components/svgs";

import FramerMagic from "./svgAnimate";

const styles = stylex.create({
	socials: {
		paddingTop: "3em",
		display: "flex",
		gap: "1em",
		alignItems: "center",
		"@media (width >= 20em)": {
			gap: "1.75em",
		},
	},
});

export default function Socials() {
	return (
		<div {...stylex.props(styles.socials)}>
			<FramerMagic>
				<a href="https://github.com/ChuksFestus" target="_blank" rel="noreferrer">
					<GithubIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://www.linkedin.com/in/chuksfestus" target="_blank" rel="noreferrer">
					<LinkedinIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://twitter.com/Iam_chuksfestus/" target="_blank" rel="noreferrer">
					<TwitterIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://www.instagram.com/chuks_festus/" target="_blank" rel="noreferrer">
					<InstagramIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://dribbble.com/ChuksFestus" target="_blank" rel="noreferrer">
					<DribbbleIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://www.figma.com/@chuksFestus" target="_blank" rel="noreferrer">
					<FigmaIcon />
				</a>
			</FramerMagic>
		</div>
	);
}
