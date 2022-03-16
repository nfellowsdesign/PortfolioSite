import styles from "./projects.module.css"

import R0 from '../Assests/Images/Rise/R0.png'
import R1 from '../Assests/Images/Rise/R1.png'
import R2 from '../Assests/Images/Rise/R2.png'
import R3 from '../Assests/Images/Rise/R3.png'
import R4 from '../Assests/Images/Rise/R4.png'
import R5 from '../Assests/Images/Rise/R5.png'
import R6 from '../Assests/Images/Rise/R6.png'
import R7 from '../Assests/Images/Rise/R7.png'
import R8 from '../Assests/Images/Rise/R8.png'
import R9 from '../Assests/Images/Rise/R9.png'
import R10 from '../Assests/Images/Rise/R10.png'

function Rise() {
    return(
        <div className={styles.contentBox}>
            <h1>RISE</h1>
            <p>Layout Design / Experimental Typography</p>
            <p className={styles.bodyCopy}>RISE is an exploration of sourdough bread throughout Oregon. It showcases the entire process of bread-making, from the starter all the way to eating. RISE pairs together traditional subject matter with experimental typography, creating dynamic layouts out of the contradicting elements.</p>
            <img className={styles.image} src={R0} />
            <img className={styles.image} src={R1} />
            <img className={styles.image} src={R2} />
            <img className={styles.image} src={R3} />
            <img className={styles.image} src={R4} />
            <img className={styles.image} src={R5} />
            <img className={styles.image} src={R6} />
            <img className={styles.image} src={R7} />
            <img className={styles.image} src={R8} />
            <img className={styles.image} src={R9} />
            <img className={styles.image} src={R10} />

        </div>
    );
}

export default Rise;