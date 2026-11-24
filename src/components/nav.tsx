import { Link } from "@tanstack/react-router";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
	nav: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logo: {
		width: "3.875em",
		height: "3.25em",
		"@media (width >= 48em)": {
			width: "6.071875em",
			height: "5.0125em",
		},
	},
});

export default function Navigation() {
	return (
		<nav {...stylex.props(styles.nav)}>
			<Link to="/">
				<img
					{...stylex.props(styles.logo)}
					src="/logo.svg"
					alt="Chuks Festus Logo"
					width={97.15}
					height={80.2}
				/>
			</Link>
		</nav>
	);
}
