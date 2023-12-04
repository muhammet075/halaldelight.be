import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "../assets/logo/halaldelight-logo.svg";
import hamburgerIco from "../assets/icons/hamburgermenu.svg";
import closeIco from "../assets/icons/close.svg";
import Snoep1 from "../assets/img/Sour-Bears.png";

function Header() {

    useEffect(() => {
    }, []);

    return(      
        <header className={styles.header + " fadeinheader stickyheader"} id="halaldelightheader">  
            <div>
                <section>
                    <Link href="/"><Image src={Logo} alt="Logo of Halal Delight"/></Link>
                </section>
            </div>
        </header>
    )
}
  
export default Header;