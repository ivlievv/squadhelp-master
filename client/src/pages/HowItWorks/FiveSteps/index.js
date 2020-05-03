import React from 'react';
import styles from './FiveSteps.module.sass'


const FiveSteps = () =>{
        return (
            <div>
                <h2 className={styles.title}>5 Simple Steps</h2>
                <div className={styles.container}>
                    <div className={styles.stepContainer}>
                        <div className={styles.numberContainer}>
                            <div className={styles.number}>1</div>
                        </div>
                        <h4 className={styles.titleStep}>Start Your Contest</h4>
                        <p className={styles.description}>Complete our fast, easy project brief template, and we’ll share it with our community of more than 70,000 Creatives.</p>
                    </div>
                    <div className={styles.stepContainer}>
                        <div className={styles.numberContainer}>
                            <div className={styles.number}>2</div>
                        </div>
                        <h4 className={styles.titleStep}>Ideas Start Pouring In</h4>
                        <p className={styles.description}>You will start receiving name ideas - created specifically for you - within minutes. Dozens of contestants work for you at the same time! A typical naming contest receives several hundred name ideas. All ideas are automatically checked for URL availability.</p>
                    </div>
                    <div className={styles.stepContainer}>
                        <div className={styles.numberContainer}>
                            <div className={styles.number}>3</div>
                        </div>
                        <h4 className={styles.exception}>Collaborate and Communicate</h4>
                        <p className={styles.description}>See all your submissions from your contest dashboard. Rate entries, leave private comments, and send public messages, leading the process towards the perfect name.</p>
                    </div>
                    <div className={styles.stepContainer}>
                        <div className={styles.numberContainer}>
                            <div className={styles.number}>4</div>
                        </div>
                        <h4 className={styles.titleStep}>Validate</h4>
                        <p className={styles.description}>Choose your name with confidence. Our unique validation process includes domain checks, trademark risk assessment, linguistics analysis, and professional audience testing.</p>
                    </div>
                    <div className={styles.stepContainer}>
                        <div className={styles.numberContainer}>
                            <div className={styles.number}>5</div>
                        </div>
                        <h4 className={styles.titleStep}>Pick your winner!</h4>
                        <p className={styles.description}>Once your contest ends, announce the winner - and register the name. Come back to Squadhelp to launch a Logo Design or Tagline project for your name.</p>
                    </div>
                </div>
            </div>
        )
}

export default FiveSteps