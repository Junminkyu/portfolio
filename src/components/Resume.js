import React, {useState} from "react";
import styles from "../css/Resume.module.css";
import resume from '../img/resume.png';
 
const Resume = () => {

    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        width: "20vw",
        transition: 'filter 0.4s ease-in-out', // smooth transition
        filter: isHovered ? 'blur(0px)' : 'blur(2px)',
      };

    const onButtonClick = () => {
        const pdfUrl = "Minkyu_Jun_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Minkyu_Jun_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    return (
        <div className={styles.resume}>
            <h1 style={{textAlign:"center", marginBottom:"20px"}}>Download My Resume!</h1>
            <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>
                <button onClick={onButtonClick}>
                    <img src={resume} style={cardStyle} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}></img>
                </button>
            </div>
            <div style={{textAlign:"center", marginTop:"20px"}}>
                Click the resume above to download!
            </div>
        </div>
    );
};
 
export default Resume;