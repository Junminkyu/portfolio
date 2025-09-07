import React from 'react';
import { Typewriter } from 'react-simple-typewriter' 
import styles from '../css/About.module.css';
import profile from '../img/profile_photo.png';
import Linkedin from './Linkedin';


function About(){

    return (
        <>
            <div className={styles.about}>
                <div>
                    <div className={styles.Introduction}>Hi, I am Minkyu <span>👋 </span></div>
                    <div className={styles.Check}>
                        <div className={styles.Type}>
                            I am dedicated to tackling diverse challenges and creating impactful solutions.
                        </div>
                    </div>
                    <Linkedin/>
                </div>
                <div>
                    <img src={profile} className={styles.img}></img>
                </div>
            </div>
        </>      
    
    )
}

export default About;