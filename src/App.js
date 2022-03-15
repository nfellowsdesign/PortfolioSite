import styles from './App.module.css';
import { Routes, Route } from "react-router-dom";

import Home from './Projects/Home';
import Deliciously from './Projects/Deliciously';
import ArboretumTour from './Projects/ArboretumTour';
import Rise from './Projects/Rise';
import UnitedWay from './Projects/UnitedWay';
import YearPlantedSigns from './Projects/YearPlantedSigns';
import MythsAndMonsters from './Projects/MythsAndMonsters';
import Hayloft from './Projects/Hayloft';

import SkillCard from './Components/SkillCard'
import ProjectButtons from './Components/ProjectButtons'

import LogoWhite from './Assests/SVG/LogoWhite.svg'

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
      <ProjectButtons />
      <ProjectButtons />
      <ProjectButtons />
      <ProjectButtons />
      <ProjectButtons />
      <ProjectButtons />
      <ProjectButtons />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Deliciously' element={<Deliciously/>}/>
        <Route path='/ArboretumTour' element={<ArboretumTour/>}/>
        <Route path='/Rise' element={<Rise/>}/>
        <Route path='/UnitedWay' element={<UnitedWay/>}/>
        <Route path='/YearPlantedSigns' element={<YearPlantedSigns/>}/>
        <Route path='/MythsAndMonsters' element={<MythsAndMonsters/>}/>
        <Route path='/Hayloft' element={<Hayloft/>}/>
      </Routes>
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
