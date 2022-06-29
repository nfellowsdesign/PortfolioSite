import styles from "./projects.module.css"

import ProjectHeader from '../Components/ProjectHeader'

import YP1 from '../Assests/Images/Yearplanted/YP1.png'
import YP2 from '../Assests/Images/Yearplanted/YP2.png'
import YP3 from '../Assests/Images/Yearplanted/YP3.png'
import YP4 from '../Assests/Images/Yearplanted/YP4.png'

function YearPlantedSigns() {
    return(
        <div className={styles.contentBox}>
            <h1>YEAR PLANTED SIGNS</h1>
            <p>Layout Design / Branding</p>
            <p className={styles.bodyCopy}>These year planted signs were developed to portray supplementary information about specific stands throughout the Research Forests. Designed specifically to be a low cost way to educate forest users on the practices of forest land managers and how their decisions impact the landscape. </p>
            <img className={styles.image} src={YP1} />
            <img className={styles.image} src={YP2} />
            <img className={styles.image} src={YP3} />
            <img className={styles.image} src={YP4} />

        </div>
    );
}

export default YearPlantedSigns;