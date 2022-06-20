import styles from './App.module.css';

import Contact from './Components/Contact'

import LogoWhite from './Assests/SVG/LogoWhite.svg'
import ProjectSection from './Components/ProjectSection';

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
    <div>
      {/*PROJECTS*/}
      <ProjectSection/>
    </div>
    <div className={styles.section}>
      <Contact/>
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
