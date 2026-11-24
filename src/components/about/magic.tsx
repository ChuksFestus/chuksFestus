import { useEffect } from "react";
import type { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

const backgroundPan = stylex.keyframes({
	from: { backgroundPosition: "0% center" },
	to: { backgroundPosition: "-200% center" },
});

const scale = stylex.keyframes({
	"0%": { transform: "scale(0)" },
	"50%": { transform: "scale(1)" },
	"100%": { transform: "scale(0)" },
});

const rotate = stylex.keyframes({
	from: { transform: "rotate(0deg)" },
	to: { transform: "rotate(180deg)" },
});

const styles = stylex.create({
	root: {
		display: "inline-block",
		position: "relative",
	},
	star: {
		animationName: scale,
		animationDuration: "700ms",
		animationTimingFunction: "ease",
		animationFillMode: "forwards",
		display: "block",
		height: "clamp(20px, 1.5vw, 30px)",
		left: "var(--star-left)",
		position: "absolute",
		top: "var(--star-top)",
		width: "clamp(20px, 1.5vw, 30px)",
	},
	starSvg: {
		animationName: rotate,
		animationDuration: "1000ms",
		animationTimingFunction: "linear",
		animationIterationCount: "infinite",
		display: "block",
		opacity: 0.7,
	},
	starPath: {
		fill: "var(--pink)",
	},
	orange: {
		backgroundImage: "linear-gradient(0deg, var(--orange) 0%, var(--pink) 102.56%)",
		backgroundClip: "text",
		color: "transparent",
		animationName: backgroundPan,
		animationDuration: "3s",
		animationTimingFunction: "linear",
		animationIterationCount: "infinite",
		backgroundSize: "200%",
	},
});

const Star = () => {
	const { className, style } = stylex.props(styles.star);

	return (
		<span className={`${className ?? ""} magic-star`} style={style}>
			<svg {...stylex.props(styles.starSvg)} viewBox="0 0 512 512">
				<path
					{...stylex.props(styles.starPath)}
					d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
				/>
			</svg>
		</span>
	);
};

interface StarElement extends HTMLElement {
	style: CSSStyleDeclaration;
}

export default function Magic({ children }: { children: ReactNode }) {
	useEffect(() => {
		const interval = 1000;
		const stars = Array.from(document.getElementsByClassName("magic-star")) as StarElement[];

		const rand = (min: number, max: number): number =>
			Math.floor(Math.random() * (max - min + 1)) + min;

		const animate = (star: StarElement): void => {
			star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
			star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

			star.style.animation = "none";
			void star.offsetHeight;
			star.style.animation = "";
		};

		const startAnimation = (): void => {
			for (const star of stars) {
				animate(star);
			}
		};

		startAnimation();

		const intervalId = setInterval(() => {
			startAnimation();
		}, interval);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<span {...stylex.props(styles.root)}>
			<Star />
			<Star />
			<Star />
			<span {...stylex.props(styles.orange)}>{children}</span>.
		</span>
	);
}
