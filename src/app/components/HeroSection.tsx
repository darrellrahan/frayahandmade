"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  const carouselData = [
    "bg-[url('/img/bg1.png')]",
    "bg-[url('/img/bg3.png')]",
    "bg-[url('/img/bg4.png')]",
    "bg-[url('/img/bg6.png')]"
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCarouselIndex(carouselIndex === 2 ? 0 : carouselIndex + 1);
    }, 2500);

    return () => {
      clearInterval(id);
    };
  }, [carouselIndex]);

  return (
    <section className={styles.heroSection} style={{ minHeight: "4200px" }}>
      <div className={styles.heroImageContainer}>
        <div className="h-[350px] lg:h-[500px] flex items-center relative overflow-hidden">
          {carouselData.map((data, index) => {
            let className = "translate-x-full opacity-0";

            if (index === carouselIndex) {
              className = "translate-x-0 opacity-100";
            }
            if (
              index === carouselIndex - 1 ||
              (index === 2 && carouselIndex === 0)
            ) {
              className = "-translate-x-full opacity-0";
            }

            return (
              <div
                key={data}
                className={`absolute inset-0 ${className} ${data} duration-300 ease-linear bg-cover bg-center`}
              ></div>
            );
          })}
         
         
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8">
          <div
            style={{
              height: "100%",
              backgroundImage: "url('/img/kr3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              padding: "5rem 0",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>Travel </span>
            <span style={{ fontSize: "1.25rem" }}>Mukena</span>
            <Link href="/mukenakorea">
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid black",
                  padding: "0.5rem",
                }}
              >
                VIEW PRODUCT
              </button>
            </Link>
          </div>
          <div
            style={{
              height: "100%",
              backgroundImage: "url('/img/M12.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              padding: "5rem 0",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>Satin</span>
            <span style={{ fontSize: "1.25rem" }}>Mukena</span>
            <Link href="/mukenasatin">
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid black",
                  padding: "0.5rem",
                }}
              >
                VIEW PRODUCT
              </button>
            </Link>
          </div>
          <div
            style={{
              height: "100%",
              backgroundImage: "url('/img/travel.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              padding: "5rem 0",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>Travel</span>
            <span style={{ fontSize: "1.25rem" }}>Sajadah</span>
            <Link href="/sejadahtravel">
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid black",
                  padding: "0.5rem",
                }}
              >
                VIEW PRODUCT
              </button>
            </Link>
          </div>
          <div
            style={{
              height: "100%",
              backgroundImage: "url('/img/bulu.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              padding: "5rem 0",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>Bulu</span>
            <span style={{ fontSize: "1.25rem" }}>Sajadah</span>
            <Link href="/sejadahbulu">
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid black",
                  padding: "0.5rem",
                }}
              >
                VIEW PRODUCT
              </button>
            </Link>
          </div>
          <div
            style={{
              height: "100%",
              backgroundImage: "url('/img/sejadah.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              padding: "5rem 0",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>Busa</span>
            <span style={{ fontSize: "1.25rem" }}>Sajadah</span>
            <Link href="/sejadahbusa">
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid black",
                  padding: "0.5rem",
                }}
              >
                VIEW PRODUCT
              </button>
            </Link>
          </div>
          <div
            style={{
              height: "100%",
              backgroundImage: "url(/img/souvernir.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              padding: "5rem 0",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>Souvenir</span>
            <span style={{ fontSize: "1.25rem" }}>Souvenir</span>
            <Link href="/souvenir">
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid black",
                  padding: "0.5rem",
                }}
              >
                VIEW PRODUCT
              </button>
            </Link>
          </div>
          <div
            style={{
              height: "100%",
              backgroundImage: "url(/img/bulu.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              padding: "5rem 0",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>Ready Stock</span>
            <span style={{ fontSize: "1.25rem" }}>Ready Stock</span>
            <Link href="/readystok">
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid black",
                  padding: "0.5rem",
                }}
              >
                VIEW PRODUCT
              </button>
            </Link>
          </div>
        </div>
        <Fade direction="down">
          <p
            style={{
              marginTop: "150px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "120",
            }}
          >
            Our
          </p>
          <p
            style={{
              marginTop: "1px",
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "150",
            }}
          >
            Signature
          </p>
          <p
            style={{
              marginTop: "2px",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "100",
            }}
          >
            Product
          </p>
        </Fade>
        <Fade direction="down">
          <Link href="/sbulu2">
            <div
              style={{
                display: "grid",
                gap: "1rem",
                padding: "2rem",
              }}
              className="grid-cols-1 lg:grid-cols-4"
            >
              <div className="h-[350px] overflow-hidden relative rounded-[10px] group">
                <div className="absolute inset-0 bg-[url('/img/bs1.jpeg')] bg-cover group-hover:-inset-16 duration-300 ease-linear"></div>
              </div>
              <div className="h-[350px] overflow-hidden relative rounded-[10px] group">
                <div className="absolute inset-0 bg-[url('/img/bs2.jpeg')] bg-cover group-hover:-inset-16 duration-300 ease-linear"></div>
              </div>
              <div className="h-[350px] overflow-hidden relative rounded-[10px] group">
                <div className="absolute inset-0 bg-[url('/img/bs3.jpeg')] bg-cover group-hover:-inset-16 duration-300 ease-linear"></div>
              </div>
              <div className="h-[350px] overflow-hidden relative rounded-[10px] group">
                <div className="absolute inset-0 bg-[url('/img/bs4.jpeg')] bg-cover group-hover:-inset-16 duration-300 ease-linear"></div>
              </div>
            </div>
          </Link>
        </Fade>
        <Fade direction="up"></Fade>
        <div className={styles.heroWN} style={{ marginTop: "150px" }}>
          <Fade direction="left">
            <Link href="https://wa.me/6281770256797">
              <Image
                src="/img/bg5.png"
                alt="gambar"
                width={1000}
                height={100}
              />
            </Link>
          </Fade>
        </div>

        <Fade direction="up">
          <p
            style={{
              marginTop: "125px",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "150",
            }}
          >
            About Us
          </p>

          <p style={{ textAlign: "center" }}>
            Frayahandmade is producer prayer tools custom which accepts request
            design, lettering and size.
          </p>
        </Fade>

        <Fade direction="down">
          <p
            style={{
              marginTop: "125px",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "150",
            }}
          >
            Our Customer
          </p>

          <div
            className={styles.Client}
            style={{
              marginLeft: "50px",
              marginTop: "50px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image
              src="/img/dishub.png"
              alt="gambar"
              width={150}
              height={150}
            />
            <Image
              src="/img/djarum.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/istana.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/janjijiwa.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/bjb.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/bni.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/bri.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px " }}
            />
          </div>

          <div
            className={styles.customer}
            style={{
              marginLeft: "50px",
              marginTop: "100px",
              display: "flex",
              flexDirection: "row",
            }}
          ></div>

          <div
            className={styles.Client}
            style={{
              marginLeft: "50px",
              marginTop: "50px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image
              src="/img/pertamina.png"
              alt="gambar"
              width={150}
              height={150}
            />
            <Image
              src="/img/roca.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/setneg.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/sitikhadijah.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/tiaraangkasa.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/tni.png"
              alt="gambar"
              width={150}
              height={150}
              style={{ marginLeft: "30px" }}
            />
            <Image
              src="/img/bjbs.png"
              alt="gambar"
              width={200}
              height={200}
              style={{ marginLeft: "30px" }}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default HeroSection;
