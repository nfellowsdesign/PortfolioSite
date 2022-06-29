import styles from "./projects.module.css"

import Artboard10 from "../Assests/Images/Mam/Artboard 10.png"
import Artboard11 from "../Assests/Images/Mam/Artboard 11.png"
import Artboard12 from "../Assests/Images/Mam/Artboard 12.png"
import Artboard13 from "../Assests/Images/Mam/Artboard 13.png"
import Artboard14 from "../Assests/Images/Mam/Artboard 14.png"
import Artboard15 from "../Assests/Images/Mam/Artboard 15.png"
import Artboard16 from "../Assests/Images/Mam/Artboard 16.png"
import ProjectHeader from "../Components/ProjectHeader"

function MythsAndMonsters() {
    return(
        <div className={styles.contentBox}>
            <ProjectHeader title={"MYTHS AND MONSTERS"} subtitle={"test and test"} attributes={"Graphic Design, Logo Design, Vector Illustration, Illustration"}  desc={"An exploratory designer focused on delivering engaging digital experiences by bringing together creative problem solving, expressive execution."}/>
            <img className={styles.image} src={Artboard10} />
            <img className={styles.image} src={Artboard11} />
            <img className={styles.image} src={Artboard12} />
            <img className={styles.image} src={Artboard13} />
            <img className={styles.image} src={Artboard14} />
            <img className={styles.image} src={Artboard15} />
            <img className={styles.image} src={Artboard16} />
        </div>
    );
}

export default MythsAndMonsters;