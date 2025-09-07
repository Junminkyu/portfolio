import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import style from '../css/Card.module.css'
import Tag from './Tag';

export default function MediaCard({img,title,description,tag,githubLink}) {

  const [isHovered, setIsHovered] = useState(false);
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

  const mystyle = {
    backgroundImage: `url(${img})`,
    backgroundSize:'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    Width:'25vw',
    borderRadius: '25px',
  };

  const cardStyle={
    borderRadius:'25px', 
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
    marginTop: '50px',
    transition: 'transform 0.3s ease-in-out', // smooth transition
    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
    width: windowWidth < 1000 && "80vw",
  }

  return (
    <Card style={cardStyle} variant="soft"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={mystyle}>
        <div className={style.cover}>
          <div className={style.photoHolder}>
            <img src={img} className={style.img}/>
          </div>
        </div>
      </div>
        <CardContent style={{backgroundColor:"white"}}>
          <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"bold"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Tag skillArray={tag}/> 
          </Typography>
          <CardActions>
            <Button size="small"><a href={githubLink} >Github</a></Button>
          </CardActions>
        </CardContent>
    </Card>
  );
}


