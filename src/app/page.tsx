"use client";

import About from "./ui/about";
import Contact from "./ui/contact";
import Header from "./ui/header";
import Works from "./ui/works";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Works />
      <Contact />
    </>
  );
}
