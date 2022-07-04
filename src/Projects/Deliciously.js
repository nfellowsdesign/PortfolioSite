import styles from "./projects.module.css"

import ProjectHeader from '../Components/ProjectHeader'

import DLogo from "../Assests/Images/Deliciously/D0.png"
import D1 from "../Assests/Images/Deliciously/D1.png"
import D2 from "../Assests/Images/Deliciously/D2.png"
import D3 from "../Assests/Images/Deliciously/D3.png"
import D4 from "../Assests/Images/Deliciously/D4.png"
import D5 from "../Assests/Images/Deliciously/D5.png"
import D6 from "../Assests/Images/Deliciously/D6.png"
import D7 from "../Assests/Images/Deliciously/D7.png"

function Deliciously() {
    return(
        <div className={styles.contentBox}>
            <ProjectHeader title={"DELICIOUSLY"} subtitle={"From the Ground Up"} attributes={"UX Design, Branding, Graphic Design, Project Management, AGILE"}  desc={"Deliciously is a recipe app start-up, built for both IOS and Android. Deliciously takes advantage of modern technologies to provide the best experience for both users and content creators. As co-founder and lead designer, I handled UX/UI, branding, and other collateral."}/>
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