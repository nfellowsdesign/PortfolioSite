import styles from "./projects.module.css"

import ProjectHeader from '../Components/ProjectHeader'

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
import R11 from '../Assests/Images/Rise/R11.png'
import R12 from '../Assests/Images/Rise/R12.png'
import R13 from '../Assests/Images/Rise/R13.png'
import R14 from '../Assests/Images/Rise/R14.png'
import R15 from '../Assests/Images/Rise/R15.png'
import R16 from '../Assests/Images/Rise/R16.png'
import R17 from '../Assests/Images/Rise/R17.png'
import R18 from '../Assests/Images/Rise/R18.png'
import R19 from '../Assests/Images/Rise/R19.png'
import R20 from '../Assests/Images/Rise/R20.png'
import R21 from '../Assests/Images/Rise/R21.png'


function Rise() {
    return(
        <div className={styles.contentBox}>
            <ProjectHeader title={"RISE"} subtitle={"Sourdough in Oregon"} attributes={"Layout Design, Graphic Design, Experimental Typography"}  desc={"RISE is an exploration of sourdough bread throughout Oregon. It showcases the entire process of bread-making, from the starter all the way to eating. RISE pairs together traditional subject matter with experimental typography, creating dynamic layouts out of the contradicting elements."}/>
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
            <img className={styles.image} src={R11} />
            <img className={styles.image} src={R12} />
            <img className={styles.image} src={R13} />
            <img className={styles.image} src={R14} />
            <img className={styles.image} src={R15} />
            <img className={styles.image} src={R16} />
            <img className={styles.image} src={R17} />
            <img className={styles.image} src={R18} />
            <img className={styles.image} src={R19} />
            <img className={styles.image} src={R20} />
            <img className={styles.image} src={R21} />
        </div>
    );
}

export default Rise;