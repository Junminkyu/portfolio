import {React, useState, useEffect} from 'react';
import style from '../css/Works.module.css'
import ActionAreaCard from './ProjectCard';
import CSE from '../img/cse.png';
import Epic from '../img/epic.png';
import CHEPS from '../img/cheps.jpg';
import WorkCard from './WorkCard';
import WorkMobileCard from './WorkMobileCard';


function Works(){

    let workArray = [
        {
            img: CSE,
            location: "University of Michigan Computer Science & Engineering",
            title: "Database Management System TA",
            description: "I am currently teaching an upper-level computer science course with 300+ students, covering ER diagrams, SQL, Java, MongoDB, query optimization, advanced sorting techniques, and crash recovery.",
            duration: "Aug 2025 - Present"
        },
        {
            img: Epic,
            location: "Epic Systems",
            title: "Software Developer Intern",
            description: `At Epic Systems, I worked on developing a custom AI agent with OpenAI GPT-4.1 model and prompt engineering to convert users’ natural
language instructions into structured JSON, automating the generation of scheduling rules without manual
configuration and reducing setup time by 75% while achieving 90% accuracy.`,
            duration: "May 2025 - Aug 2025"
        },
        {
            img: CHEPS,
            location: "University of Michigan Center for Healthcare Engineering & Patient Safety (CHEPS)",
            title: "Software Engineer Intern",
            description: `During my time at CHEPS, our team implemented linear programming with C++ to build a scheduling optimization tool that prioritized a hierarchy of
metrics, reducing manual scheduling time for 250+ Michigan Medicine clinicians by 70%.`,
            duration: "Aug 2024 - Jan 2025"
        }
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    const WorkArray = workArray.map((element, idx) =>
        isMobile ? (
        <WorkMobileCard
            className={style.element}
            img={element.img}
            location={element.location}
            title={element.title}
            description={element.description}
            duration={element.duration}
        />
        ) : (
        <WorkCard className={style.element} img={element.img} location={element.location} title={element.title} description={element.description} duration={element.duration}/>
        )
  );

    return(
        <div id="work">
            <div className={style.work}>
                <div className={style.title}>Works</div>
            </div>
            <div className={style.container}>
                {WorkArray}
            </div>
        </div>
    )
}

export default Works;