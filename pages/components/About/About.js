import React from 'react';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.aboutSection}>
            <h1 className={styles.header}>About</h1>
            <div className={styles.aboutCard}>
                <div className={styles.picShader}>
                    <img src="https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1669&q=80" alt="meal" className={styles.aboutCardPic}/>
                </div>
                <div className={styles.aboutTextCard}>
                    <h1 className={styles.aboutCardHeader}>Lorem, ipsum dolor.</h1>
                    <p className={styles.aboutCardP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure hic exercitationem odit. Optio officia cum corporis placeat ut aperiam ipsa itaque neque dolores cumque beatae provident, quas at. Ea?</p>
                </div>
            </div>
        </section>
    )
}
