import styles from './About.module.css'

import SkillCard from './SkillCard.js'
import Name from '../Assests/SVG/Name.svg'

import { motion } from "framer-motion"

function About() {

    return(
        <div className={styles.aboutcontainer}>
            <motion.img className={styles.name} src={Name} alt={Name} animate={{rotate: -360 }} transition={{ repeat: Infinity, duration: 15, delay: 0, ease: "linear"}}/>
            <div className={styles.content}>
                <div className={styles.profile}>
                    <div className={styles.copy}>
                        <p> An exploratory designer focused on delivering engaging digital experiences by bringing together creative problem solving, expressive execution, and collaboration.</p>
                    </div>
                    <div className={styles.portrait}></div>
                </div>
                <hr className={styles.divider}></hr>
                <div className={styles.skills}>
                    <SkillCard title={"DESIGNER"} copy={"Graphic Design, UX Design, Branding, Adobe Creative Cloud, Figma"}></SkillCard>
                    <SkillCard title={"DEVELOPER"} copy={"React.JS, AGILE Methodology, HTML 5, CSS 3, JS, Github"}></SkillCard>
                    <SkillCard title={"ARTIST"} copy={"Illustration, Vector Illustration, Photography, Photo Editing, Screen Printing"}></SkillCard>
                </div>
            </div>
        </div>
    );
}

export default About;