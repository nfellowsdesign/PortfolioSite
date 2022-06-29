import styles from "./projects.module.css"

import ProjectHeader from '../Components/ProjectHeader'

import A0 from "../Assests/Images/Arbtour/A0.png"
import A1 from "../Assests/Images/Arbtour/A1.png"
import A2 from "../Assests/Images/Arbtour/A2.png"
import A3 from "../Assests/Images/Arbtour/A3.png"
import A4 from "../Assests/Images/Arbtour/A4.png"
import A5 from "../Assests/Images/Arbtour/A5.png"

function ArboretumTour() {
    return(
        <div className={styles.contentBox}>
            <ProjectHeader title={"ARBORETUM TOUR"} subtitle={"Redesign and Reintroduction"} attributes={"UX Design, Branding, Graphic Design, Project Management, AGILE"}  desc={"An exploratory designer focused on delivering engaging digital experiences by bringing together creative problem solving, expressive execution."}/>
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