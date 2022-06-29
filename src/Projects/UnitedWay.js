import styles from "./projects.module.css"

import ProjectHeader from '../Components/ProjectHeader'

import UW0 from '../Assests/Images/Unitedway/UW0.png'
import UW1 from '../Assests/Images/Unitedway/UW1.png'
import UW2 from '../Assests/Images/Unitedway/UW2.png'
import UW3 from '../Assests/Images/Unitedway/UW3.png'
import UW4 from '../Assests/Images/Unitedway/UW4.png'
import UW5 from '../Assests/Images/Unitedway/UW5.png'
import UW6 from '../Assests/Images/Unitedway/UW6.png'
import UW7 from '../Assests/Images/Unitedway/UW7.png'
import UW8 from '../Assests/Images/Unitedway/UW8.png'
import UW9 from '../Assests/Images/Unitedway/UW9.png'
import UW10 from '../Assests/Images/Unitedway/UW10.png'

function UnitedWay() {
    return(
        <div className={styles.contentBox}>
            <ProjectHeader title={"UNITED WAY"} subtitle={"test and test"} attributes={"Layout Design, Branding, Vector Illustration, Infographics"}  desc={"This design project was a collaborative effort between Nichole Beyer, Kenzie Dunham, Maggie Murray, and I. We worked along side United Way of Linn, Benton, & Lincoln Counties. This project included branding and layout design for multiple deliverables. Through research and connections we developed specific colors, illustrations, and infographics to work with the existing United Way branding to elevate our local chapter."}/>
            <img className={styles.image} src={UW0} />
            <img className={styles.image} src={UW1} />
            <img className={styles.image} src={UW3} />
            <img className={styles.image} src={UW4} />
            <img className={styles.image} src={UW5} />
            <img className={styles.image} src={UW6} />
            <img className={styles.image} src={UW7} />
            <img className={styles.image} src={UW8} />
            <img className={styles.image} src={UW9} />
            <img className={styles.image} src={UW10} />

        </div>
    );
}

export default UnitedWay;