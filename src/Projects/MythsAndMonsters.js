import styles from "./projects.module.css"

import Artboard10 from "../Assests/Images/Mam/Artboard 10.png"
import Artboard11 from "../Assests/Images/Mam/Artboard 11.png"
import Artboard12 from "../Assests/Images/Mam/Artboard 12.png"
import Artboard13 from "../Assests/Images/Mam/Artboard 13.png"
import Artboard14 from "../Assests/Images/Mam/Artboard 14.png"
import Artboard15 from "../Assests/Images/Mam/Artboard 15.png"
import Artboard16 from "../Assests/Images/Mam/Artboard 16.png"

function MythsAndMonsters() {
    return(
        <div className={styles.contentBox}>
            <h1>MYTHS AND MONSTERS</h1>
            <p>Vector Illustration</p>
            <p className={styles.bodyCopy}>Myths and Monsters is a personal illustration project depicting various creatures from Greek Mythology. The main focus of this project was to push myself to create dynamic illustrations while limiting myself in terms of style. This was primarily done to improve and develop my skills in creating visually pleasing and interesting shapes.</p>
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