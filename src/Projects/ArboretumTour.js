import styles from "./projects.module.css"

import ProjectHeader from '../Components/ProjectHeader'

import AT1 from "../Assests/Images/Arbtour/AT1.png"
import AT2 from "../Assests/Images/Arbtour/AT2.png"
import AT3 from "../Assests/Images/Arbtour/AT3.png"
import AT4 from "../Assests/Images/Arbtour/AT4.png"
import AT5 from "../Assests/Images/Arbtour/AT5.png"
import AT6 from "../Assests/Images/Arbtour/AT6.png"

function ArboretumTour() {
    return(
        <div className={styles.contentBox}>
            <ProjectHeader title={"ARBORETUM TOUR"} subtitle={"Redesign and Reintroduction"} attributes={"Branding, Graphic Design, Project Management, Layout Design"}  desc={"An exploratory designer focused on delivering engaging digital experiences by bringing together creative problem solving, expressive execution."}/>
            <img className={styles.image} src={AT1} />
            <img className={styles.image} src={AT2} />
            <img className={styles.image} src={AT3} />
            <img className={styles.image} src={AT4} />
            <img className={styles.image} src={AT5} />
            <img className={styles.image} src={AT6} />
        </div>
    );
}

export default ArboretumTour;