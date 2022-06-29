import styles from "./projects.module.css"

import ProjectHeader from '../Components/ProjectHeader'

import DLogo from "../Assests/Images/Deliciously/D0@150x.png"
import D1 from "../Assests/Images/Deliciously/D1@150x.png"
import D2 from "../Assests/Images/Deliciously/D2@150x.png"
import D3 from "../Assests/Images/Deliciously/D3@150x.png"
import D4 from "../Assests/Images/Deliciously/D4@150x.png"
import D5 from "../Assests/Images/Deliciously/D5@150x.png"
import D6 from "../Assests/Images/Deliciously/D6@150x.png"
import D7 from "../Assests/Images/Deliciously/D7@150x.png"

function Deliciously() {
    return(
        <div className={styles.contentBox}>
            <ProjectHeader title={"DELICIOUSLY"} subtitle={"test and test"} attributes={"UX Design, Branding, Graphic Design, Project Management, AGILE"}  desc={"An exploratory designer focused on delivering engaging digital experiences by bringing together creative problem solving, expressive execution."}/>
            <img className={styles.image} src={DLogo} />
            <img className={styles.image} src={D1} />
            <img className={styles.image} src={D2} />
            <img className={styles.image} src={D3} />
            <img className={styles.image} src={D4} />
            <img className={styles.image} src={D5} />
            <img className={styles.image} src={D6} />
            <img className={styles.image} src={D7} />

        </div>
    );
}

export default Deliciously;