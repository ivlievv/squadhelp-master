import React from "react";
import styles from './Start.module.sass'
const StartContest = () => {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.btnContainer}>
                    <a className={styles.btn}>START CONTEST</a>
                </div>
            </div>
        </div>
    )
}

export default StartContest;