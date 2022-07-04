import styles from "./projects.module.css"

import ProjectHeader from '../Components/ProjectHeader'

import UW1 from '../Assests/Images/Unitedway/UW1.png'
import UW2 from '../Assests/Images/Unitedway/UW2.png'
import UW3 from '../Assests/Images/Unitedway/UW3.png'
import UW4 from '../Assests/Images/Unitedway/UW4.png'
import UW5 from '../Assests/Images/Unitedway/UW5.png'
import UW6 from '../Assests/Images/Unitedway/UW6.png'
import UW7 from '../Assests/Images/Unitedway/UW7.png'

function UnitedWay() {
    return(
        <div className={styles.contentBox}>
            <ProjectHeader title={"UNITED WAY"} subtitle={"Cascades to the Coast"} attributes={"Layout Design, Branding, Vector Illustration, Infographics"}  desc={"Working alongside United Way of Linn, Benton, & Lincoln Counties. This project, tackled by a small team, included branding and layout design for a range of deliverables. Through research and connections we developed specific colors, illustrations, and infographics to work with the existing United Way branding to elevate our local chapter."}/>
            <img className={styles.image} src={UW1} />
            <img className={styles.image} src={UW2} />
            <img className={styles.image} src={UW3} />
            <img className={styles.image} src={UW4} />
            <img className={styles.image} src={UW5} />
            <img className={styles.image} src={UW6} />
            <img className={styles.image} src={UW7} />
        </div>
    );
}

export default UnitedWay;