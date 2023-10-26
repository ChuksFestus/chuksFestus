"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --not-white: hsl(0deg 0.35% 97.26%);
  --gradient: linear-gradient(
    90deg,
    hsl(261.34deg 100% 50.39%) 0%,
    hsl(261.52deg 100% 18.04%) 102.56%
  );
  @media (color-gamut: p3) {
    --not-white: oklch(97.91% 0 0);
    --gradient: linear-gradient(
      90deg,
      oklch(49.54% 0.294 282.11) 0%,
      oklch(24.07% 0.139 286.46) 102.56%
    );
  }
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  background: var(--gradient);
}
  `;

export default function Wrapper() {
	return (
		<>
			<GlobalStyle />
		</>
	);
}
