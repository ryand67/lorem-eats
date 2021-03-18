import React from 'react';
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroShader}>
                <h1 className={styles.header}>Lorem Eats</h1>
                {/* <hr className={styles.hr}/>
                <button className={styles.aboutBtn}>About</button> */}
                <p className={styles.blurb}>Classic and authentic steaks</p>
            </div>
        </div>
    )
}
