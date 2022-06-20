import styles from './ProjectHeader.module.css'

function ProjectHeader(props) {
    return(
        <div className={styles.header}>
            <div className={styles.title}></div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.subtitle}></div>
                    <hr className={styles.divider}></hr>
                    <div className={styles.attributes}></div>
                </div>
                <div className={styles.description}></div>
            </div>
        </div>
    );
}

export default ProjectHeader;