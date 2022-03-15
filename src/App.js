import styles from './App.module.css';

import SkillCard from './Components/SkillCard'


import LogoWhite from './Assests/SVG/LogoWhite.svg'
import ProjectHandler from './Components/ProjectHandler';

function App() {
  return (
  <div className={styles.app}>
    <div className={styles.hero}>
      <img className={styles.logo} src={LogoWhite} alt={LogoWhite}></img>
    </div>
    <div className={styles.intro}>
      {/*INTRO*/}
      <h2>An exploratory designer focused on delivering engaging digital
experiences by bringing together creative problem solving,
expressive execution, and collaboration.</h2>
    </div>
    <div className={styles.section}>
      {/*PROJECTS*/}
      <ProjectHandler/>
    </div>
    <div className={styles.section}>
      {/* Skills */}
      <SkillCard />
      <SkillCard />
      <SkillCard />
    </div>
    <div className={styles.section}>
      <h1>ABOUT</h1>
    </div>
    <div className={styles.section}>
      <h1>CONTACT</h1>
    </div>
    <div className={styles.footer}>
      <h1>✌️</h1>
      <div>
        <div>Nathan Fellows</div>
        <div>nfellowsdesign@gmail.com</div>
        <div>503-975-4598</div>
      </div>
    </div>
  </div>
  );
}

export default App;
