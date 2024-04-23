"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const HeroSectionMukena = () => {
  return (
    <section
      className={styles.HeroSectionMukena}
      style={{ minHeight: "700px" }}
    >
      <div
        className={styles.heroImageContainer}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className={styles.hover_overlay}
          style={{
            marginTop: "80px",
            marginLeft: "80px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div className="relative group">
            <div className="absolute inset-0 hidden group-hover:flex bg-black/75 items-center justify-center">
            <Link href="/mukena5">
                <button className="text-white">View</button>
              </Link>
            </div>
            <Image src="/img/M3.JPG" alt="gambar" width={280} height={200} />
          </div>

          <div className="relative group">
            <div className="absolute inset-0 hidden group-hover:flex bg-black/75 items-center justify-center">
            <Link href="/mukena6">
                <button className="text-white">View</button>
              </Link>
            </div>
            <Image src="/img/M13.JPG" alt="gambar" width={280} height={250} />
          </div>
          <div className="relative group">
            <div className="absolute inset-0 hidden group-hover:flex bg-black/75 items-center justify-center">
            <Link href="/mukena7">
                <button className="text-white">View</button>
              </Link>
            </div>
            <Image src="/img/M5.jpg" alt="gambar" width={280} height={250} />
          </div>
          <div className="relative group">
            <div className="absolute inset-0 hidden group-hover:flex bg-black/75 items-center justify-center">
            <Link href="/mukena8">
                <button className="text-white">View</button>
              </Link>
            </div>
            <Image src="/img/M9.JPG" alt="gambar" width={280} height={250} />
          </div>
        </div>
        <br />
      </div>
      <div
        className={styles.heroImageContainer}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <br />
      </div>
    </section>
  );
};

export default HeroSectionMukena;
