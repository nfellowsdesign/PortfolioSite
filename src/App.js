import styles from './App.module.css';
import { motion } from "framer-motion"

import About from './Components/About'
import Contact from './Components/Contact'
import Spacer from './Components/Spacer'

import Arrow from './Assests/SVG/Arrow.svg'
import LogoWhite from './Assests/SVG/LogoWhite.svg'
import ProjectSection from './Components/ProjectSection';

function App() {
  return (
  <div className={styles.app}>
    <div className={styles.hero}>
      <img className={styles.logo} src={LogoWhite} alt={LogoWhite}></img>
      <motion.img className={styles.arrow} src={Arrow} alt={Arrow} animate={{opacity: [0,1,0]}} transition={{ repeat: Infinity, duration: 3, delay: 0,}}/>
    </div>
    <Spacer/>
    <About/>
    <Spacer/>
    <div>
      <ProjectSection/>
    </div>
    <Spacer/>
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
