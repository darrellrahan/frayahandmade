// components/Footer.js
import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const destination =
    "https://www.google.com/maps?q=Sajadah Fraya Handmade, Sajadah tahlil, Souvenir Sajadah, Sajadah custom, Sajadah Travel Bandung";

  return (
    <footer className={styles.footer}>
      <div className="flex flex-col lg:flex-row text-center justify-between items-center gap-16">
        <button className={styles.footerButton} style={{ fontSize: "25px" }}>
          Information <br />
          <Link href="/hto" style={{ fontSize: "20px" }}>
            How to order
          </Link>
        </button>
        <Link href={destination} style={{ fontSize: "25px" }}>
          Our Store
        </Link>
        <button className={styles.footerButton} style={{ fontSize: "25px" }}>
          Customer Care
          <div className={styles.FooterText} style={{ fontSize: "15px" }}>
            frayahandmade@gmail.com
          </div>
        </button>

        <button className={styles.footerButton} style={{ fontSize: "25px" }}>
          Follow Us
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.instagram.com/frayahandmade"
              style={{ marginRight: "10px" }}
            >
              <Image
                src="/img/instagram.png"
                alt="gambar"
                width={27}
                height={27}
              />
            </a>
            <a
              href="https://www.tiktok.com/@frayahandmade?is_from_webapp=1&sender_device=pc"
              style={{ marginRight: "10px" }}
            >
              <Image
                src="/img/tiktok.png"
                alt="gambar"
                width={25}
                height={25}
              />
            </a>

            <a href="https://www.facebook.com/frayahandmade">
              <Image
                src="/img/facebook.png"
                alt="gambar"
                width={35}
                height={35}
              />
            </a>
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
