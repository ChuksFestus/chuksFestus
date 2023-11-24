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
				<GithubIcon />
			</FramerMagic>
			<FramerMagic>
				<LinkedinIcon />
			</FramerMagic>
			<FramerMagic>
				<TwitterIcon />
			</FramerMagic>
			<FramerMagic>
				<InstagramIcon />
			</FramerMagic>
			<FramerMagic>
				<DribbbleIcon />
			</FramerMagic>
			<FramerMagic>
				<FigmaIcon />
			</FramerMagic>
		</div>
	);
}
