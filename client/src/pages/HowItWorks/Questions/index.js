import React from "react";
import styles from './Question.module.sass'

const Question = () => {
    return(
        <div className={styles.container}>
           <div className={styles.content}>
               <div className={styles.wrapIcon}>
                   <div className={styles.icon}>
                       <i className="far fa-envelope fa-3x"></i>
                   </div>
               </div>
               <div className={styles.questionContainer}>
                   <h1>Questions?</h1>
                   <p>
                       Check out our
                       <a href="http://help.squadhelp.com"></a>
                       or send us a
                       <a>message</a>.
                       For assistance with launching a contest, you can also call us at (877) 355-3585 or schedule a
                       <a href="">Branding Consultation</a>
                   </p>
               </div>
               <div className={styles.btn}>GET IN TOUCH</div>
           </div>
        </div>
    )
}

export default Question;