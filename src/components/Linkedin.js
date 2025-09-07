import React from 'react';
import { useState, useEffect} from 'react';


function Linkedin (){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const [color,setColor]=useState("white");
    const [bgcolor,setBgcolor]=useState("black");

    const MouseEnter = () =>{
        setColor("black");
        setBgcolor("white");
    }

    const MouseLeave = () => {
        setColor("white");
        setBgcolor("black");
    }

    const myStyle = {
        fontSize: windowWidth < 1000 ? "15px": "40px",
        marginTop: windowWidth < 1000 ? "2vh" : "10vh",
        color: color,
        backgroundColor: bgcolor,
        textDecoration: "none",
        padding:"10px 20px 10px 20px"
    };

    const divStyle={
        marginTop:"10vh",
    };

    return(
            <a href="https://www.linkedin.com/in/minkyu-jun" target="_blank" rel="noopener noreferrer">
              <button style={myStyle} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>My Linkedin Site</button>
            </a>
    );
}

export default Linkedin;