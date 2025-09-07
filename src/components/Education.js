import React, { useState } from 'react';
import styles from '../css/Eduction.module.css';
import photo from '../img/block_m-hex.png';
import photo2 from '../img/umich_horizontal.png';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"


function Education() {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const pastCourse = [
        "EECS 281: Data Structures and Algorithms",
        "EECS 370: Intro to Computer Organization",
        "EECS 376: Foundation of Computer Science",
        "EECS 481: Software Engineering",
        "EECS 482: Intro to Operating Systems",
        "EECS 484: Database Management Systems",
        "EECS 485: Web Systems"
    ];

    const futureCourse = [
        "EECS 545: Machine Learning",
        "EECS 583: Advanced Compiler",
        "EECS 593: Human-Computer Interaction",
        "EECS 595: Natural Language Processing"
    ];

    const activity = [
        "JSA", "Void Tech"
    ]

    const list1 = pastCourse.map((course, key) =>
        <li key={key} className={styles.list}>{course}</li>
    );

    const list2 = futureCourse.map((course, key) =>
        <li key={key} className={styles.list}>{course}</li>
    );

    const list3 = activity.map((course, key)=>
         <li key={key} className={styles.list}>{course}</li>
    );

    const getCardStyle = (index) => ({
        transition: 'transform 0.3s ease-in-out',
        transform: hoveredIndex === index ? 'scale(1.08)' : 'scale(1)',
    });

    return (
        <div className={styles.education} id="education">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>          
            <div className={styles.title}>Education</div>
            <div className={styles.grid}>
                <div className={styles.box} style={{ gridRow: "1",...getCardStyle(9) }}
                     onMouseEnter={() => setHoveredIndex(9)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div>
                        <img src={photo} className={styles.logo} alt="Logo" />
                    </div>
                    <div>
                        <img src={photo2} className={styles.collegeName} alt="College Name" />
                    </div>
                </div>
                <div
                    className={styles.box}
                    style={{ gridRow: "1/2", gridColumn: "2/5", ...getCardStyle(0) }}
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className={styles.section}>
                        <p className={styles.course}>Relevant Coursework</p>
                        <ul className={styles.ul}>
                            {list1}
                        </ul>
                    </div>
                </div>
                <div
                    className={styles.box}
                    style={{ gridRow: "2/4", gridColumn: "1/3", ...getCardStyle(1) }}
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className={styles.section}>
                        <p className={styles.course}>Future Coursework</p>
                        <ul>
                            {list2}
                        </ul>
                    </div>
                </div>
                <div
                    className={styles.box}
                    style={{ gridRow: "2/3", gridColumn: "3/5", ...getCardStyle(2) }}
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <p className={styles.course}>Degree</p>
                    <p className={styles.degree}>B.S.E in Computer Science</p>
                    <p className={styles.graduate}>Expected Graduation Date: Dec 2025</p>
                    <p className={styles.degree}>M.S.E in Computer Science</p>
                    <p className={styles.graduate}>Expected Graduation Date: Dec 2026</p>
                </div>
                <div
                    className={styles.box}
                    style={{ gridRow: "3/4", gridColumn: "3/4", ...getCardStyle(3) }}
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <p className={styles.course}>GPA</p>
                    <CountUp
                        start={0.00}
                        end={4.00}
                        duration={3}
                        decimals={2}
                        className={styles.number}
                    />
                </div>
                <div
                    className={styles.box}
                    style={{ gridRow: "3/4", gridColumn: "4/5", ...getCardStyle(4) }}
                    onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <p className={styles.course}>Activities</p>
                    <div>
                        <ui>
                        <li>Void Tech</li> 
                        <li>JSA</li>
                        </ui>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    );
}

export default Education;
