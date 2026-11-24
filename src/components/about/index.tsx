import { useEffect, useLayoutEffect, useRef } from "react";
import type { RefObject } from "react";
import * as stylex from "@stylexjs/stylex";

import Text from "@/components/text";

import AboutCont from "./whatIdo";
import Magic from "./magic";

const styles = stylex.create({
	container: {
		marginBlock: "1rem",
		marginInline: "1.25rem",
		backgroundColor: "var(--not-white)",
		borderRadius: "0.5rem",
		padding: "1rem",
		paddingTop: "2.5rem",
		minHeight: "calc(100vh - 2rem)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		"@media (width <= 26.5625em)": {
			marginBlock: "0.5rem",
			marginInline: "0.5rem",
			padding: "0.75rem",
			paddingTop: "1.25rem",
			height: "100%",
		},
	},
	inner: {
		maxWidth: "75rem",
		marginInline: "auto",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	},
	label: {
		paddingBottom: "2rem",
	},
	heading: {
		paddingTop: 12,
		fontWeight: 600,
	},
	blue: {
		backgroundImage: "linear-gradient(0deg, #5c02ff 0%, var(--dark-blue) 102.56%)",
		backgroundClip: "text",
		color: "transparent",
	},
});

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function About() {
	const magicRef = useRef<HTMLDivElement | null>(null);
	useMagicAnimation(magicRef);

	return (
		<section {...stylex.props(styles.container)}>
			<div {...stylex.props(styles.inner)} ref={magicRef}>
				<Text variant="h6" font="sfmono" xstyle={styles.label}>
					About Me
				</Text>
				<div>
					<Text variant="h2" xstyle={styles.heading}>
						<span className="toAnimate">
							I&apos;m a <span {...stylex.props(styles.blue)}>Product Engineer</span> who turns
							ideas into thoughtful digital products. I combine design, engineering and product
							thinking to build experiences that are{" "}
						</span>
						<Magic>intuitive, functional and built to scale</Magic>
					</Text>
				</div>
				<AboutCont />
			</div>
		</section>
	);
}

type TargetElement = HTMLElement;

function useMagicAnimation(magicRef: RefObject<HTMLDivElement | null>) {
	useIsomorphicLayoutEffect(() => {
		let cancelled = false;
		let cleanup: (() => void) | undefined;

		void (async () => {
			const [{ gsap }, { ScrollTrigger }, { default: SplitType }] = await Promise.all([
				import("gsap"),
				import("gsap/ScrollTrigger"),
				import("split-type"),
			]);

			if (cancelled || !magicRef.current) return;

			gsap.registerPlugin(ScrollTrigger);

			const splitTypes = magicRef.current.querySelectorAll<TargetElement>(".toAnimate");
			const splits: Array<{ revert: () => void }> = [];

			splitTypes.forEach((char) => {
				const text = new SplitType(char, { types: "chars,words" });
				splits.push(text);

				gsap.from(text.chars, {
					scrollTrigger: {
						trigger: char,
						start: "top 80%",
						end: "top 20%",
						scrub: true,
						markers: false,
					},
					opacity: 0.2,
					stagger: 0.1,
				});
			});

			cleanup = () => {
				splits.forEach((split) => split.revert());
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		})();

		return () => {
			cancelled = true;
			cleanup?.();
		};
	}, [magicRef]);
}
