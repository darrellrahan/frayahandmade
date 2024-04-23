// components/Navbar.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        padding: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <Image src="/img/logoo.png" alt="gambar" width={100} height={102} />
      </Link>
      <button className="lg:hidden">
        <Image src="/navbar.svg" alt="navbar" width={50} height={50} />
      </button>
      <Link href="/" className="hidden lg:inline-block">
        Home
      </Link>
      <div className="items-center gap-4 hidden lg:flex">
        <Link href="https://wa.me/6281770256797" style={{ marginTop: "5px" }}>
          <Image src="/img/wa.png" alt="gambar" width={31} height={31} />
        </Link>
        <Link href="https://shopee.com/frayahandmade">
          <Image src="/img/shopee.png" alt="gambar" width={37} height={37} />
        </Link>
        <Link href="https://tokopedia.com/frayahandmade">
          <Image src="/img/tokopedia.png" alt="gambar" width={39} height={39} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
