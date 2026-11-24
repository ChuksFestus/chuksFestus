import { useState } from "react";
import * as stylex from "@stylexjs/stylex";

import Text from "@/components/text";

const styles = stylex.create({
	container: {
		paddingTop: "12.5rem",
	},
	label: {
		paddingBottom: "2rem",
	},
	details: {
		borderTopWidth: "0.5px",
		borderTopStyle: "solid",
		borderTopColor: "var(--gray-4)",
		cursor: "pointer",
	},
	body: {
		fontSize: "clamp(1.313rem, 0.795vw + 1.153rem, 1.75rem)",
		lineHeight: "clamp(1.969rem, 0.557vw + 1.857rem, 2.275rem)",
		maxWidth: "71.875rem",
		paddingBottom: "2rem",
		color: "hsla(0, 0%, 31%, 1)",
	},
	summary: {
		position: "relative",
		paddingBlock: "1.25rem",
		paddingInlineEnd: "2rem",
		listStyle: "none",
		transitionProperty: "margin",
		transitionDuration: "200ms",
		transitionTimingFunction: "ease-out",
		"::before": {
			content: '""',
			width: "0.75em",
			height: 0,
			borderBottomWidth: "2px",
			borderBottomStyle: "solid",
			position: "absolute",
			top: "calc(50% - 1px)",
			right: 0,
			transform: "translateY(-50%)",
		},
		"::after": {
			content: '""',
			width: "0.75em",
			height: 0,
			borderBottomWidth: "2px",
			borderBottomStyle: "solid",
			position: "absolute",
			top: "calc(50% - 1px)",
			right: 0,
			transform: "rotate(90deg)",
			transformOrigin: "50% 50%",
			transitionProperty: "transform",
			transitionDuration: "0.2s",
			transitionTimingFunction: "ease-in-out",
		},
	},
	summaryOpen: {
		marginBottom: "10px",
		"::after": {
			transform: "rotate(0deg)",
		},
	},
});

const sections = [
	{
		id: "product-engineering",
		title: "Product Engineering",
		body: "I bring ideas to life through a blend of engineering, creativity and product thinking. From the first lines of code to the final details, I design, build and refine digital products that feel intuitive, perform seamlessly and stand the test of scale. Every decision is intentional, every interaction considered, and every solution built with purpose.",
	},
	{
		id: "product-design",
		title: "Product Design",
		body: "I turn complexity into clarity, shaping digital experiences that feel as good as they function. Guided by curiosity, empathy and an eye for detail, I move from early concepts and user flows to polished interfaces and meaningful interactions. My goal is to make technology feel natural, useful and delightful.",
	},
	{
		id: "backend-architecture",
		title: "Backend & System Architecture",
		body: "Behind every great experience is an architecture built to support it. I design the systems that power digital products, connecting APIs, databases and services into reliable, scalable foundations. I approach every layer with precision, balancing performance, maintainability and the flexibility to grow.",
	},
	{
		id: "ai-integration",
		title: "AI Integration",
		body: "I explore the possibilities of AI and turn them into practical product experiences. From intelligent workflows to context-aware features, I integrate AI where it makes a meaningful difference — simplifying complex tasks, enhancing capabilities and creating new ways for people to interact with technology.",
	},
];

export default function AboutCont() {
	const [openDetails, setOpenDetails] = useState("product-engineering");

	return (
		<div {...stylex.props(styles.container)}>
			<Text variant="h6" font="sfmono" xstyle={styles.label}>
				What I Do
			</Text>
			{sections.map((section) => {
				const isOpen = openDetails === section.id;

				return (
					<details key={section.id} open={isOpen} {...stylex.props(styles.details)}>
						<summary
							onClick={(event) => {
								event.preventDefault();
								setOpenDetails(section.id);
							}}
							{...stylex.props(styles.summary, isOpen && styles.summaryOpen)}
						>
							<Text variant="h3">{section.title}</Text>
						</summary>
						<Text variant="p" xstyle={styles.body}>
							{section.body}
						</Text>
					</details>
				);
			})}
		</div>
	);
}
