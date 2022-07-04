
import styles from './ProjectSection.module.css'
import { Routes, Route, NavLink } from "react-router-dom";
import {useRef} from "react";
import { motion } from "framer-motion"

import ProjectButtons from './ProjectButtons'

import Home from '../Projects/Home';
import Deliciously from '../Projects/Deliciously';
import ArboretumTour from '../Projects/ArboretumTour';
import Rise from '../Projects/Rise';
import UnitedWay from '../Projects/UnitedWay';
import MythsAndMonsters from '../Projects/MythsAndMonsters';

function ProjectSection() {

    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()

    const projRef = useRef(null)

    const executeProjScroll = () => projRef.current.scrollIntoView()  
 
    return(
        <div>
        <div ref={projRef}></div>
        <div className={styles.container}>
            <div className={styles.controls}>
                <NavLink onClick={executeScroll} className={styles.links} to={'/Deliciously'}>
                    <ProjectButtons title={"DELICIOUSLY"} class={"deliciously"}/>
                </NavLink>
                <NavLink onClick={executeScroll} className={styles.links} to={'/MythsAndMonsters'}>
                    <ProjectButtons title={"MYTHS AND MONSTERS"} class={"mam"}/>
                </NavLink>
                <NavLink onClick={executeScroll} className={styles.links} to={'/UnitedWay'}>
                    <ProjectButtons title={"UNITED WAY"} class={"uw"}/>
                </NavLink>
                <NavLink onClick={executeScroll} className={styles.links} to={'/Rise'}>
                    <ProjectButtons title={"RISE"} class={"rise"}/>
                </NavLink>
                <NavLink onClick={executeScroll} className={styles.links} to={'/ArboretumTour'}>
                    <ProjectButtons title={"ARBORETUM TOUR"} class={"at"}/>
                </NavLink>
                <div className={styles.content} ref={myRef}>
            </div>
            
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Deliciously' element={<Deliciously/>}/>
                <Route path='/ArboretumTour' element={<ArboretumTour/>}/>
                <Route path='/Rise' element={<Rise/>}/>
                <Route path='/UnitedWay' element={<UnitedWay/>}/>
                <Route path='/MythsAndMonsters' element={<MythsAndMonsters/>}/>
                </Routes>
            </div>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}  onClick={executeProjScroll} className={styles.returnbutton}> ↖️ </motion.button>
        </div>
    </div>
    );
}

export default ProjectSection;