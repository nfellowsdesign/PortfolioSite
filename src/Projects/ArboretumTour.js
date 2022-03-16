import styles from "./projects.module.css"

import A0 from "../Assests/Images/Arbtour/A0.png"
import A1 from "../Assests/Images/Arbtour/A1.png"
import A2 from "../Assests/Images/Arbtour/A2.png"
import A3 from "../Assests/Images/Arbtour/A3.png"
import A4 from "../Assests/Images/Arbtour/A4.png"
import A5 from "../Assests/Images/Arbtour/A5.png"

function ArboretumTour() {
    return(
        <div className={styles.contentBox}>
            <h1>ARBORETUM TOUR</h1>
            <p>Layout Design / Branding / Environmental Design</p>
            <p className={styles.bodyCopy}>The Peavy Arboretum Exploration Tour is a redux of an old installation at Peavy Arboretum.  This goal was to breath new life into the exploration tour by creating an all new tree scavenger hunt to promote engagement with the diverse taxonomy at the Arboretum. We also wanted to focus on the idea of exploration, which was missing from the old tour. To accomplish this we updated layout elements to increase the overall user experience, added new scientific illustrations done by Sue Ranseen to accurately depict the trees, and created engaging riddles to instill a sense of actionable mystery.</p>
            <img className={styles.image} src={A0} />
            <img className={styles.image} src={A1} />
            <img className={styles.image} src={A2} />
            <img className={styles.image} src={A3} />
            <img className={styles.image} src={A4} />
            <img className={styles.image} src={A5} />
        </div>
    );
}

export default ArboretumTour;