
import styles from './ProjectButtons.module.css'
import { motion } from "framer-motion"

function ProjectButtons(props) {
    return(
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={props.class}>
            {props.title}
        </motion.button>
    );
}

export default ProjectButtons;