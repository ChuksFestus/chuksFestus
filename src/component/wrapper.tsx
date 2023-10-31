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

@font-face {
  font-family: 'Calibre';
  src: url('/fonts/CalibreSemibold.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Calibre-semibold';
  src: url('/fonts/CalibreSemibold.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'SFMono-medium';
  src: url('/fonts/SFMono-Medium.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'SFMono-semibold';
  src: url('/fonts/SFMono-Semibold.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'SFMono-bold';
  src: url('/fonts/SFMono-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}

:root {
  --not-white: hsl(0deg 0.35% 97.26%);
  --dark-blue: hsl(261.52deg 100% 18.04%);
  --not-black: hsla(198, 86%, 14%, 1);
  --gradient: linear-gradient(
    90deg,
    hsl(261.34deg 100% 50.39%) 0%,
    var(--dark-blue) 102.56%
  );
  @media (color-gamut: p3) {
    --not-white: oklch(97.91% 0 0);
    --dark-blue: oklch(24.07% 0.139 286.46);
    --not-black: oklch(29.12% 0.055 232.24);
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
  font-family:
    "Calibre",
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
