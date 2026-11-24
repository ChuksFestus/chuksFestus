import { forwardRef } from "react";
import type { CSSProperties, HTMLAttributes, Ref } from "react";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type Font = "calibre" | "sfmono";

export interface TextProps extends HTMLAttributes<HTMLElement> {
	variant: Variant;
	font?: Font;
	xstyle?: StyleXStyles;
	"data-value"?: string;
}

const fontStyles = stylex.create({
	calibre: {
		fontFamily: "var(--font-calibre), sans-serif",
	},
	sfmono: {
		fontFamily: "var(--font-sfmono), monospace",
	},
});

const styles = stylex.create({
	h1: {
		fontWeight: 600,
		fontSize: "clamp(1.875rem, 5.455vw + 1.534rem, 2.625rem)",
		lineHeight: "clamp(2.813rem, 4.364vw + 2.54rem, 3.413rem)",
		"@media (width >= 20em)": {
			fontSize: "clamp(3.188rem, 6.511vw + 1.458rem, 5.625rem)",
			lineHeight: "clamp(4.781rem, 6.761vw + 2.985rem, 7.313rem)",
		},
		"@media (width >= 64em)": {
			fontSize: "clamp(3.188rem, 6.511vw + 1.458rem, 5.625rem)",
			lineHeight: "clamp(4.781rem, 6.761vw + 2.985rem, 7.313rem)",
		},
	},
	h2: {
		fontWeight: 600,
		fontSize: "clamp(2.375rem, 4.841vw + 1.089rem, 4.188rem)",
		lineHeight: "clamp(3.563rem, 5.025vw + 2.228rem, 5.444rem)",
	},
	h3: {
		fontWeight: 600,
		fontSize: "clamp(2.375rem, 1.477vw + 2.08rem, 3.188rem)",
		lineHeight: "clamp(3.563rem, 1.057vw + 3.351rem, 4.144rem)",
	},
	h4: {
		fontWeight: 600,
		fontSize: "clamp(1.313rem, 1.963vw + 0.805rem, 2.375rem)",
		lineHeight: "clamp(1.969rem, 2.067vw + 1.434rem, 3.088rem)",
	},
	h5: {
		fontWeight: 600,
		fontSize: "inherit",
	},
	h6: {
		fontWeight: 700,
		fontSize: "clamp(1rem, 0.835vw + 0.778rem, 1.313rem)",
		lineHeight: "clamp(1.5rem, 0.551vw + 1.354rem, 1.706rem)",
	},
	p: {
		fontWeight: 400,
		fontSize: "clamp(1rem, 0vw + 1rem, 1rem)",
		lineHeight: "clamp(1.3rem, -0.534vw + 1.642rem, 1.5rem)",
	},
});

const Text = forwardRef<HTMLElement, TextProps>(
	({ variant, font = "calibre", xstyle, className, style, children, ...props }, ref) => {
		const sx = stylex.props(styles[variant], fontStyles[font], xstyle);
		const mergedClassName = [sx.className, className].filter(Boolean).join(" ") || undefined;
		const mergedStyle =
			sx.style || style ? ({ ...sx.style, ...style } as CSSProperties) : undefined;

		switch (variant) {
			case "h1":
				return (
					<h1
						{...props}
						ref={ref as Ref<HTMLHeadingElement>}
						className={mergedClassName}
						style={mergedStyle}
					>
						{children}
					</h1>
				);
			case "h2":
				return (
					<h2
						{...props}
						ref={ref as Ref<HTMLHeadingElement>}
						className={mergedClassName}
						style={mergedStyle}
					>
						{children}
					</h2>
				);
			case "h3":
				return (
					<h3
						{...props}
						ref={ref as Ref<HTMLHeadingElement>}
						className={mergedClassName}
						style={mergedStyle}
					>
						{children}
					</h3>
				);
			case "h4":
				return (
					<h4
						{...props}
						ref={ref as Ref<HTMLHeadingElement>}
						className={mergedClassName}
						style={mergedStyle}
					>
						{children}
					</h4>
				);
			case "h5":
				return (
					<h5
						{...props}
						ref={ref as Ref<HTMLHeadingElement>}
						className={mergedClassName}
						style={mergedStyle}
					>
						{children}
					</h5>
				);
			case "h6":
				return (
					<h6
						{...props}
						ref={ref as Ref<HTMLHeadingElement>}
						className={mergedClassName}
						style={mergedStyle}
					>
						{children}
					</h6>
				);
			case "p":
				return (
					<p
						{...props}
						ref={ref as Ref<HTMLParagraphElement>}
						className={mergedClassName}
						style={mergedStyle}
					>
						{children}
					</p>
				);
		}
	},
);

Text.displayName = "Text";

export default Text;
