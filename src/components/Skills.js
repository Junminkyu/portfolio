import React from 'react';
import Marquee from "react-fast-marquee";
import { ReactOriginal, CplusplusOriginal, PythonOriginal, JavaOriginal, JavascriptOriginal, Css3Original, Html5Original, GithubOriginal, FigmaOriginal, NextjsOriginal, SqldeveloperOriginal, DjangoPlain, SqlalchemyOriginal} from 'devicons-react'
import style from "../css/Skills.module.css";
import HoverCardDemo from './HoverCard';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"




function Skills(){

    const handleHover= () => {

    }

    return(
        <div className={style.skill} id="skill">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <p className={style.title}>Skills</p>
            <Marquee autoFill={true} speed={115}>
                <Tooltip title="React.js" arrow followCursor={true}>
                    <IconButton>
                        <ReactOriginal className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="C++" arrow followCursor={true}>
                    <IconButton>
                        <CplusplusOriginal className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Java" arrow followCursor={true}>
                    <IconButton>
                        <JavaOriginal className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Python" arrow followCursor={true}>
                    <IconButton>
                        <PythonOriginal className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Javascript" arrow followCursor={true}>
                    <IconButton>
                        <JavascriptOriginal className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="SQL" arrow followCursor={true}>
                    <IconButton>
                        <SqldeveloperOriginal className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="DJango" arrow followCursor={true}>
                    <IconButton>
                        <DjangoPlain className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="CSS" arrow followCursor={true}>
                    <IconButton>
                        <Css3Original className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="HTML" arrow followCursor={true}>
                    <IconButton>
                        <Html5Original className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Next.js" arrow followCursor={true}>
                    <IconButton>
                        <NextjsOriginal className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Github" arrow followCursor={true}>
                    <IconButton>
                        <GithubOriginal className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Figma" arrow followCursor={true}>
                    <IconButton>
                        <FigmaOriginal className={style.icon} size={85}/>
                    </IconButton>
                </Tooltip>
            </Marquee>
            </ScrollAnimation>
        </div>
    )
}

export default Skills