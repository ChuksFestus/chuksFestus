import localFont from "next/font/local";

export const rem = (num: number) => `${num / 16}rem`;
export const em = (num: number) => `${num / 16}em`;

export const size = {
  mobileS: `${em(320)}`,
  mobileM: `${em(375)}`,
  mobileL: `${em(425)}`,
  tablet: `${em(768)}`,
  laptop: `${em(1024)}`,
  laptopL: `${em(1440)}`,
  desktop: `${em(2560)}`,
};

export const device = {
  mobileS: `(width >= ${size.mobileS})`,
  mobileM: `(width >= ${size.mobileM})`,
  mobileL: `(width >= ${size.mobileL})`,
  tablet: `(width >= ${size.tablet})`,
  laptop: `(width >= ${size.laptop})`,
  laptopL: `(width >= ${size.laptopL})`,
  desktop: `(width >= ${size.desktop})`,
  desktopL: `(width >= ${size.desktop})`,
};

export const calibre = localFont({
  src: [
    {
      path: "../../public/fonts/CalibreSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/CalibreRegular.otf",
      weight: "normal",
      style: "normal",
    },
  ],
});

export const sfMono = localFont({
  src: [
    {
      path: "../../public/fonts/SFMono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFMono-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
