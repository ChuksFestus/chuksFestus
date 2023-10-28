import type { Metadata } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import Wrapper from "@/component/wrapper";

const calibre = localFont({
  src: [
    // {
    //   path: "./fonts/SFMono-Medium.otf",
    //   weight: "500",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/SFMono-Semibold.otf",
    //   weight: "600",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/SFMono-Bold.otf",
    //   weight: "700",
    //   style: "normal",
    // },
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

const sfMono = localFont({
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

export const metadata: Metadata = {
  title: "Chuks Festus",
  description: "UI designer and frontend developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    <html lang="en" className={`${sfMono.className} ${calibre.className}`}>
      <body>
        <StyledComponentsRegistry>
          {children}
          <Wrapper />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
