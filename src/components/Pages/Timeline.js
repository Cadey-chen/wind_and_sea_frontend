import React from 'react';
import '../../App.css';
import './Timeline.css';
import blue_butterfly_transparent from '../../images/Blue_Butterfly_Transparent.png';
import dark_blue_butterfly from '../../images/Dark_Blue_Butterfly.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Light_Beams from '../../images/Light_Beams_2.png';

function Timeline() {
  return (
    <>
    <div className="timeline-container">
      <h1>Timeline</h1>
    </div>
    <div className="timeline-cards-container">
      <div className="line-divider"></div>
        <Card sx={{ml: "9%", width: 1600, height: 200, borderRadius: '1%', boxShadow: 1}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: 30, mt: 1.5, fontFamily: 'Inter', fontWeight: 'bold'}}>400 BCE</Typography>
          </CardContent>
        </Card>
      <div className="image-divider">
        <div className="bbt">
          <img src={blue_butterfly_transparent} alt="A blue butterfly"/>
        </div>
        <Typography position="absolute" sx={{ml: 120, mt: -30, fontSize: 50, fontFamily: 'Inter'}}>Intro</Typography>
      </div>
    <div className="image-divider">
    <Typography position="absolute" sx={{ml: 25, mt: 30, fontSize: 50, fontFamily: 'Inter'}}>Intro</Typography>
      <div className="dbbt">
        <img src={dark_blue_butterfly} alt="A blue butterfly"/>
      </div>
    </div>
    <Card sx={{ml: "9%", mt: "15%", width: 1600, height: 300, borderRadius: '1%', boxShadow: 1}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: 30, mt: 1.5, fontFamily: 'Inter', fontWeight: 'bold'}}>200 BCE</Typography>
          </CardContent>
        </Card>
    <div className="long-line">
      <div className="side-key">
        <img src={Light_Beams} alt="Light beams"/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Timeline;