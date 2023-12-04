import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/language.module.css";
import nlFlag from "../assets/flags/nl.svg";
import beFlag from "../assets/flags/be.svg";
import deFlag from "../assets/flags/de.svg";
import frFlag from "../assets/flags/fr.svg";
import TangyMix from "../assets/img/Tangy-Mix.png"

function Language() {


    useEffect(() => {
    });

    return(      
        <div className={styles.language} id="language">  
            <div>
                <h2>Kies uw taal<br/> Choisissez votre langue</h2>
                
                <Image src={TangyMix} alt="TangyMix Candy"/>

                <div>
                    <section>
                        <Image src={nlFlag} alt="Flag of the Netherlands"/>
                        <h3>Nederlands</h3>
                        <Link target="_blank" href="https://halaldelight.nl/">Verder</Link>
                    </section>

                    <section>
                        <Image src={frFlag} alt="Flag of France"/>
                        <h3>Français</h3>
                        <Link target="_blank" href="https://halaldelight.fr/">Continuer</Link>
                    </section>
                </div>
            </div>
        </div>
    )
  }
  
  export default Language;