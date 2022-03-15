
import styles from './ProjectButtons.module.css'
import { motion } from "framer-motion"

function ProjectButtons() {
    return(
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={styles.projectbutton}>
            PROJECT
        </motion.button>
    );
}

export default ProjectButtons;