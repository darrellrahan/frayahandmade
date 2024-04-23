import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}
