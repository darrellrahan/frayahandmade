import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import Footer from "../components/Footer";

const mukena1 = () => {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <HeroSection />
            <Footer />
        </main>

    )
}

export default mukena1;