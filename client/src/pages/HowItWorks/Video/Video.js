import React from "react";
import styles from './Video.module.sass'

const Video = () => {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.videoContainer} >
                    <iframe className={styles.video} frameBorder="0" src="https://fast.wistia.net/embed/iframe/vfxvect60o"/>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>How Does Squadhelp Work?</h2>
                    <p className={styles.description}>Squadhelp allows you to host branding competitions to engage with the most creative people across the globe and get high-quality results, fast. Thousands of creatives compete with each other, suggesting great name ideas. At the end of the collaborative contest, you select one winner. The winner gets paid, and you get a strong brand name that will help you succeed! It's quick, simple, and costs a fraction of an agency.</p>
                </div>
            </div>
        </div>
    )
}

export default Video;