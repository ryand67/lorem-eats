import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <h2 className={styles.logo}>LE</h2>
            <div className={styles.navList}>
                <li className={styles.navItem}>About</li>
                <li className={styles.navItem}>Menu</li>
                <li className={styles.navItem}>Contact</li>
            </div>
        </nav>
    )
}
