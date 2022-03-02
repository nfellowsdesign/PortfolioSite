import styles from './App.module.css';

function App() {
  return (
  <div>
    <div className={styles.hero}>
      <h1>HERO</h1>
    </div>
    <div className={styles.section}>
      <h1>INTRO</h1>
    </div>
    <div className={styles.section}>
      <h1>PROJECTS</h1>
    </div>
    <div className={styles.section}>
      <h1>SKILLS</h1>
    </div>
    <div className={styles.section}>
      <h1>ABOUT</h1>
    </div>
    <div className={styles.section}>
      <h1>CONTACT</h1>
    </div>
    <div className={styles.footer}>
      <h1>✌️</h1>
    </div>
  </div>
  );
}

export default App;
