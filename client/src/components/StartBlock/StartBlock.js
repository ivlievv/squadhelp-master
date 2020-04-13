import React from "react";
import styles from './StartBlock.module.sass';
import Icon from '@mdi/react'
import {mdiLightbulbOutline} from '@mdi/js';

const StartBlock = () => {
    return (
        <div className={styles.container}>
            <span>Ready to get started? Launch a contest and start receiving submissions instantly</span>
            <a className={styles.link} rel="stylesheet" href="#">
                <Icon path={mdiLightbulbOutline} size={0.9} color="black"/>
                <span>Start a contest</span>
            </a>
        </div>
    )
}

export default StartBlock;