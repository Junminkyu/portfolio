import React from 'react';
import '../css/NavBar.module.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavBar(){

    const Click= () => {
        window.location.reload();
    }
    
    return(
        <nav>
            <div>
                <div onClick={Click}>Minkyu's Website</div>
            </div>
            <ol>
                <li><AnchorLink href="#work">Works</AnchorLink></li>
                <li><AnchorLink href="#project">Projects</AnchorLink></li>
                <li><AnchorLink href="#skill">Skills</AnchorLink></li>
                <li><AnchorLink href="#education">Education</AnchorLink></li>
                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
                <li><a href="https://www.linkedin.com/in/minkyu-jun" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/Junminkyu" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ol>
        </nav>
    );
}

export default NavBar;