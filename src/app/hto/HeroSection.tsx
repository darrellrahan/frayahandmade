import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.HeroSection} style={{ minHeight: "1000px" }}>
      <p style={{ fontSize: "40px", textAlign: "center" }}>
        How To Order Our Product
      </p>

      <div style={{ marginTop: "50px" }}>
        1.Click View in the catalog you want to buy
        <Image src="/img/hto1.png" alt="gambar" width={500} height={500} />
      </div>

      <div style={{ marginTop: "50px" }}>
        2.Click View in the product you want to buy
        <Image src="/img/hto2.png" alt="gabar" width={500} height={500} />
      </div>
      <div style={{ marginTop: "50px" }}>
        3.Choose your size and click order now and you will be directed to
        WhatsApp
        <Image src="/img/hto3.png" alt="gabar" width={500} height={500} />
      </div>
    </section>
  );
};

export default HeroSection;
