import { MouseEvent, RefObject, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FramerMagic({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLHeadingElement | null>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const mouseMove = (e: MouseEvent) => {
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
		<motion.div
			style={{
				width: 40,
				height: 40,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			animate={{ x, y }}
			onMouseMove={mouseMove}
			onMouseLeave={mouseLeave}
			ref={ref as RefObject<HTMLDivElement>}
		>
			{children}
		</motion.div>
	);
}
