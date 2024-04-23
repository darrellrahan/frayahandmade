"use client"
import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css"
import { Fade } from "react-awesome-reveal";


const HeroSection = () => { 
    return (
        <section className={ styles.HeroSectionMukena} style={{ minHeight: '1700px' }}>
            
            <Fade direction="down">

            <div className={styles.HeadText} style={{ marginTop: '40px', fontSize: '40px', marginLeft: '120px' }} >
                <p>Mukena</p>
            </div>
            <div className={styles.heroImageContainer} style={{ display:'flex', flexDirection: 'row' }}>
                <div className={styles.MukenaKatalog} style={{ marginTop: '80px', marginLeft: '80px', display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <Image src="/img/M1.JPG" alt="gambar" width={280} height={250} />
                    <Image src="/img/M2.JPG" alt="gambar" width={280} height={250} style={{ marginLeft:'20px' }} />
                    <Image src="/img/M3.JPG" alt="gambar" width={280} height={250} style={{ marginLeft:'20px' }} />
                    <Image src="/img/M4.JPG" alt="gambar" width={280} height={250} style={{ marginLeft:'20px' }} />                
                    </div> <br />
            </div>

            
                <div className={styles.MukenaKatalog2} style={{ marginTop: '80px', marginLeft:'80px', display:'flex', flexDirection:'row' }}>
                <Image src="/img/M5.JPG" alt="gambar" width={280} height={250}/>
                <Image src="/img/M6.JPG" alt="gambar" width={280} height={250} style={{ marginLeft:'20px' }}/>
                <Image src="/img/M7.JPG" alt="gambar" width={280} height={250} style={{ marginLeft:'20px' }} />
                <Image src="/img/M9.JPG" alt="gambar" width={280} height={250} style={{ marginLeft:'20px' }} />
                </div>
            <div className={styles.MukenaKatalog3} style={{ marginTop:'80px', marginLeft:'80px', display:'flex', flexDirection:'row'  }}>
                <Image src="/img/M10.JPG" alt="gambar" width={280} height={250} />
                <Image src="/img/M11.JPG" alt="gambar" width={280} height={250} style={{ marginLeft:'20px' }} />
                <Image src="/img/M12.JPG" alt="gambar" width={280} height={250} style={{ marginLeft:'20px' }} />
                <Image src="/img/M13.JPG" alt="gambar" width={280} height={250} style={{ marginLeft:'20px' }} />
            </div>
            </Fade>

        </section>

    );

}

export default HeroSection;
