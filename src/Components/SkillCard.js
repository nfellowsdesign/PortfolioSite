import styles from './SkillCard.module.css'
import { motion } from "framer-motion"


function SkillCard(props) {
    return(
            <motion.div className={styles.card} whileHover={{ scale: 1.1 }}>
                <img className={styles.icon} src={props.icon}/>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.copy}>{props.copy}</div>
            </motion.div>   
    );
}

export default SkillCard;