import styles from './SkillCard.module.css'

function SkillCard(props) {
    return(
        <div className={styles.card}>
            <div className={styles.icon}>{props.icon}</div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.copy}>{props.copy}</div>
        </div>
    );
}

export default SkillCard;