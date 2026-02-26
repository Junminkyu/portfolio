import React from 'react';
import style from '../css/Projects.module.css'
import ActionAreaCard from './ProjectCard';
import ParkSwift from '../img/parkswift.png';
import CourseFlow from '../img/courseflowchart.jpg';
import OpenCourse from '../img/openCourse.png';
import Portfolio from '../img/portfolio.png';
import MediaCard from './ProjectCard';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


  // default blur:4, transparency:0.2

function Projects(){
    
    let projectArray = [
        {
            img:ParkSwift,
            title:"Park Swift",
            description:"This app facilitates parking space transaction and rentals for residences living in Ann Arbor",
            tag:["react native", "react native firebase", "javascript"],
            githubLink:"https://github.com/void-tech-um/park-swift"
        },
        {
            img:OpenCourse,
            title:"Open Course",
            description: "Can't find a study group? Use Open Courses where you can create and join the study group!",
            tag:["python","flask","react"],
            githubLink: "https://github.com/void-tech-um/open-course"
        },
        {
            img:CourseFlow,
            title:"Course Flowchart",
            description: "This website visualized prerequisite information for students to help them navigate which class to take",
            tag:["next.js","Course Hero API","Mermaid.js"],
            githubLink: "https://github.com/chaunmt/Interactive-Prerequisite-Flowchart"
        },
        {
            img:Portfolio,
            title:"Portfolio Website",
            description:"My Portfolio Website! I built this with the help of React.js, MUI UI, and EmailJs",
            tag:["react","javascript","css","mui UI"],
            githubLink: "https://junminkyu.github.io/portfolio/"
        }
    ]

    const CardArray = projectArray.map((element)=>
        <MediaCard className={style.element} img={element.img} title={element.title} description={element.description} tag={element.tag} githubLink={element.githubLink}/>
    )
    
    const ZoomInScrollOut = batch(
        StickyIn(),
        FadeIn(),
        ZoomIn(),
        MoveOut(0, -1000)
      );

    return(
            <div id="project">
                <div className={style.project}>
                    <div className={style.title}>Projects</div>
                    <div className={style.card}>
                        {CardArray}
                    </div>
                </div>
            </div>       
    )
}

export default Projects;