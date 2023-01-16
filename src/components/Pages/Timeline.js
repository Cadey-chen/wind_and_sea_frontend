import React from 'react';
import '../../App.css';
import './Timeline.css';
import blue_butterfly_transparent from '../../images/Blue_Butterfly_Transparent.png';
import dark_blue_butterfly from '../../images/Dark_Blue_Butterfly.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import sideBarRectangle from '../../images/SideBarRectangle.png';

function Timeline() {
  return (
    <>
    <div className="timeline-container">
      <h1>Timeline</h1>
    </div>
    <div className="timeline-cards-container">
      <div className="line-divider"></div>
        <Card sx={{ml: "8%", width: '85%', height: '20vw', maxHeight: '15vw', borderRadius: '1%', boxShadow: 1, overflow: 'auto'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.5vw', mt: '2%', fontFamily: 'Inter', fontWeight: 'bold'}}>400 BCE</Typography>
          </CardContent>
        </Card>
      <div className="image-divider">
        <div className="bbt">
          <img src={blue_butterfly_transparent} alt="A blue butterfly"/>
        </div>
        <Typography position="absolute" sx={{ml: '70%', mt: '-15%', fontSize: '2.5vw', fontFamily: 'Inter', fontWeight: 'bold'}}>Intro</Typography>
      </div>
    <Typography position="absolute" sx={{ml: '10%', mt: '15%', fontSize: '2.5vw', fontFamily: 'Inter', fontWeight: 'bold'}}>Info</Typography>
    <div className="image-divider">
      <div className="dbbt">
        <img src={dark_blue_butterfly} alt="A blue butterfly"/>
      </div>
    </div>
    <Card sx={{ml: "8%", mt: '20vw', width: '85%', height: '15vw', borderRadius: '2%', boxShadow: 2}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.5vw', mt: '2%', fontFamily: 'Inter', fontWeight: 'bold'}}>200 BCE</Typography>
          </CardContent>
        </Card>
      <div className="line-divider"></div>
      <div className="side-key">
        <img src={sideBarRectangle} alt="Light beams"/>
      </div>
      <div className="line-divider"></div>
    </div>
    </>
  )
}

export default Timeline;