import styles from "./projects.module.css"

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
            <h1>DELICIOUSLY</h1>
            <p>UX / UI / Branding</p>
            <p className={styles.bodyCopy}>The cookbook for the modern age. Deliciously is a meal planning / recipe app start-up, built for both IOS and Android. Deliciously takes advantage of modern technologies to provide the best experience for both users and content creators. As co-founder and lead designer, I handled UX/UI, branding, and other collateral.</p>
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