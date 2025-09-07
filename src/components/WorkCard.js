import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function WorkCard({ img, location, title, description, duration }) {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '1300px', 
    minHight: '200px',
    maxHight: '200px',
    width: '90%',
    margin: '50px auto',
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    backgroundColor: 'white',
  };

  const imageStyle = {
    width: '40%',              // take 40% of the card width
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '16px',
    borderBottomLeftRadius: '16px',
  };

  const contentStyle = {
    padding: '20px',
    width: '60%',              // take the remaining 60%
  };

  return (
    <Card
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="Work" style={imageStyle} />
      <CardContent style={contentStyle}>
        <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h7" component="div" style={{ fontWeight: 'bold' }}>
          {location}
        </Typography>
        <Typography gutterBottom variant="h8" component="div">
          {duration}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
