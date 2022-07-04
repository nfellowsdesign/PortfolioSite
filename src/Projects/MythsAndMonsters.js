import styles from "./projects.module.css"

import MM1 from "../Assests/Images/Mam/MM1.svg"
import MM2 from "../Assests/Images/Mam/MM2.svg"
import MM3 from "../Assests/Images/Mam/MM3.svg"
import MM4 from "../Assests/Images/Mam/MM4.svg"
import MM5 from "../Assests/Images/Mam/MM5.svg"
import MM6 from "../Assests/Images/Mam/MM6.svg"
import MM7 from "../Assests/Images/Mam/MM7.svg"
import ProjectHeader from "../Components/ProjectHeader"

function MythsAndMonsters() {
    return(
        <div className={styles.contentBox}>
            <ProjectHeader title={"MYTHS AND MONSTERS"} subtitle={"A Stylistic Exploration"} attributes={"Graphic Design, Logo Design, Vector Illustration, Illustration"}  desc={"Myths and Monsters is an illustration exploration project depicting various creatures from Greek Mythology. The focus of this project was to push myself to create dynamic illustrations while limiting myself in terms of style. This was primarily done to improve and develop my skills in creating visually interesting shapes."}/>
            <img className={styles.image} src={MM1} />
            <img className={styles.image} src={MM2} />
            <img className={styles.image} src={MM3} />
            <img className={styles.image} src={MM4} />
            <img className={styles.image} src={MM5} />
            <img className={styles.image} src={MM6} />
            <img className={styles.image} src={MM7} />
        </div>
    );
}

export default MythsAndMonsters;