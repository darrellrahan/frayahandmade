"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="p-16">
      <h1 className="text-center mb-20 text-4xl font-semibold">
        Sajadah Busa
      </h1>
      <div className="flex gap-16 flex-col lg:flex-row text-center lg:text-left">
        <Image src="/img/B12.JPG" alt="gambar" width={500} height={500} />
        <div className="space-y-12 lg:space-y-8 py-8">
          <div className="flex items-center gap-4 flex-col lg:flex-row">
            <p className="text-2xl font-semibold">Description:</p>
            <p>
              Sajadah with comfortable material and elegant design. We accept
              custom design
            </p>
          </div>
          <div className="flex items-center gap-4 flex-col lg:flex-row">
            <p className="text-2xl font-semibold">Material:</p>
            <p>Foam</p>
          </div>
          <div className="flex items-center gap-4 flex-col lg:flex-row">
            <p className="text-2xl font-semibold">Price:</p>
            <p>Start from Rp 159.000</p>
          </div>
          <div className="flex justify-center translate-y-12">
            <Link
              href="https://wa.me/6281770256797"
              className="bg-black text-white rounded py-2 px-4 text-lg"
            >
              Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
