import {
	DribbbleIcon,
	FigmaIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "../svgs";
import FramerMagic from "./svgAnimate";

export default function Socials() {
	return (
		<div className="socials">
			<FramerMagic>
				<a href="https://github.com/ChuksFestus" target="_blank">
					<GithubIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://www.linkedin.com/in/chuksfestus" target="_blank">
					<LinkedinIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://twitter.com/Iam_chuksfestus/" target="_blank">
					<TwitterIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://www.instagram.com/chuks_festus/" target="_blank">
					<InstagramIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://dribbble.com/ChuksFestus" target="_blank">
					<DribbbleIcon />
				</a>
			</FramerMagic>
			<FramerMagic>
				<a href="https://www.figma.com/@chuksFestus" target="_blank">
					<FigmaIcon />
				</a>
			</FramerMagic>
		</div>
	);
}
