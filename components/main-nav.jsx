'use client';
import Logo from "./logo.jsx";
import Links from "@/components/links.jsx";
import styles from "./main-nav.module.css";

import { useEffect, useState } from "react";

function MainNav(props) {
    const [state, setStat] = useState(0);
    const [notLarg, setNotLarg] = useState(0);
    function showNav() {
        setStat(!state);
    }
    useEffect(() => {
        const ckeckScreen = () => {
            setNotLarg (window.innerWidth <= 991);
        }
    
    ckeckScreen();
    window.addEventListener('resize', ckeckScreen);
    }, [])
    return (
    <div style={{ height: (state && notLarg) ? "436px" : "" }} className={styles.mainNav}>
        <Logo />
        <div onClick={showNav}>
            <Links status={state} larg={notLarg} />
        </div>
        {notLarg && (<button
        onClick={showNav}
        className={`${styles.btn} ${state ? styles.closeNav : styles.openNav}`}
        >
        <span></span>
        <span className={styles.midSpan}></span>
        <span></span>
        </button>)}
    </div>
    );
}

export default MainNav;
