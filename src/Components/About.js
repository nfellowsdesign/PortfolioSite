import styles from './About.module.css'

function About() {

    return(
        <div className={styles.aboutcontainer}>
            <div className={styles.name}></div>
            <div className={styles.content}>
                <div className={styles.profile}>
                    <div className={styles.copy}></div>
                    <div className={styles.portrait}></div>
                </div>
                <hr className={styles.divider}></hr>
                <div className={styles.skills}>
                    <SkillCard></SkillCard>
                    <SkillCard></SkillCard>
                    <SkillCard></SkillCard>
                </div>
            </div>
        </div>
    );
}

export default About;