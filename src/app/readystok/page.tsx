import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import Footer from "../components/Footer";


const mukenasatin = () => {
    return(
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <HeroSection />
            <Footer />
        </main>
    )
}

export default mukenasatin;