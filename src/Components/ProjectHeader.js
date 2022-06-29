import styles from './ProjectHeader.module.css'

function ProjectHeader(props) {
    return(
        <div className={styles.header}>
            <hr className={styles.divider}></hr>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.subtitle}>{props.subtitle}</div>
                    <hr className={styles.subdivider}></hr>
                    <div className={styles.attributes}>{props.attributes}</div>
                </div>
                <div className={styles.desc}>{props.desc}</div>
            </div>
        </div>
    );
}

export default ProjectHeader;