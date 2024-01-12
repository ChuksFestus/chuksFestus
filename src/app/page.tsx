"use client";

import { useScroll } from "framer-motion";
import About from "./ui/about";
import Contact from "./ui/contact";
import Header from "./ui/header";
import Works from "./ui/works";

export default function Home() {
  useScroll();
  return (
    <>
      <Header />
      <About />
      <Works />
      <Contact />
    </>
  );
}
