import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Wrapper from "@/component/wrapper";

export const metadata: Metadata = {
  title: "Chuks Festus",
  description: "UI designer and frontend developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
          <Wrapper />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
