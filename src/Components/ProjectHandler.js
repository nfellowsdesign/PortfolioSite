
import styles from './ProjectButtons.module.css'
import { Routes, Route } from "react-router-dom";

import ProjectButtons from './ProjectButtons'

import Home from '../Projects/Home';
import Deliciously from '../Projects/Deliciously';
import ArboretumTour from '../Projects/ArboretumTour';
import Rise from '../Projects/Rise';
import UnitedWay from '../Projects/UnitedWay';
import YearPlantedSigns from '../Projects/YearPlantedSigns';
import MythsAndMonsters from '../Projects/MythsAndMonsters';
import Hayloft from '../Projects/Hayloft';

function ProjectHandler() {
    return(
        <div>
            <div className={styles.controls}>
                <ProjectButtons />
                <ProjectButtons />
                <ProjectButtons />
                <ProjectButtons />
                <ProjectButtons />
                <ProjectButtons />
                <ProjectButtons />
            </div>
            <div className={styles.content}>
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
        </div>
    );
}

export default ProjectHandler;