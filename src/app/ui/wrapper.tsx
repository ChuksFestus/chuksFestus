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
  --dark-blue: hsl(261.52deg 100% 18.04%);
  --not-black: hsla(198, 86%, 14%, 1);
  --gray-4: hsla(0, 0%, 74%, 1);
  --gray-3: hsl(223.81 0% 51%);
  --gradient: linear-gradient(
    90deg,
    hsl(261.34deg 100% 50.39%) 0%,
    var(--dark-blue) 102.56%
  );
  @media (color-gamut: p3) {
    --not-white: oklch(97.91% 0 0);
    --dark-blue: oklch(24.07% 0.139 286.46);
    --not-black: oklch(29.12% 0.055 232.24);
    --gray-4: oklch(79.74% 0 0);
    --gray-3: oklch(60.68% 0 0);
    --gradient: linear-gradient(
      90deg,
      oklch(49.54% 0.294 282.11) 0%,
      var(--dark-blue) 102.56%
    );
  }
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  background: var(--gradient);
  color: var(--not-black);
}
  `;

export default function Wrapper() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}
