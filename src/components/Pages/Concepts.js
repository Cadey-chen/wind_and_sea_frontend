import React from 'react';
import '../../App.css';
import './Concepts.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import zzmd from '../../images/Zhuang_Zhou_Meng_Die.jpg';
import mountainsWithin from '../../images/Mountains_Within.jpg';
import qljs from '../../images/forest_painting.jpg';
import cloud_sea from '../../images/cloud_sea.jpg';

function Concepts() {
  return (
    <>
    <div className="concepts-container">
      <h1>Concepts</h1>
    </div>
    <div className="concept-cards-container">
      <div>
        <Card sx={{ml: '5%', width: '52%', height: '60vh', borderRadius: '2%', boxShadow: 1}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.45vw', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold'}}>Dream & Butterfly</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="zz">
        <img src={zzmd} alt="his dream about the butterfly"/>
      </div>
      <div>
      <Card sx={{ml: '9%', width: '82%', height: '20vw', borderRadius: '1%', boxShadow: 2, mt: '6vw'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.35vw', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold'}}>" "</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="mw">
        <img src={mountainsWithin} alt="Mountains"/>
      </div>
      <div>
        <Typography sx={{fontSize: '3vw', fontFamily: 'Inter', fontWeight: 'semibold', fontStyle: 'Italic', ml: '57%', mt: '-35%'}}>Searching Freedom</Typography>
      </div>
      <div>
      <Card sx={{ml: '9%', width: '83%', height: '30vh', borderRadius: '2%', boxShadow: 2, mt: '35%'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.35vw', mt: '2%', fontFamily: 'Inter', fontWeight: 'bold'}}>" "</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="qljs">
        <img src={qljs} alt="Lakes and Mountains"/>
      </div>
      <div>
      <Card sx={{ml: '9%', width: '30%', height: '45vh', borderRadius: '3%', boxShadow: 2, mt: '7%'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.6vw', mt: '3.5%', fontFamily: 'Inter', fontWeight: 'bold'}}>Definition</Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Typography align="right" sx={{fontSize: '3vw', fontFamily: 'Inter', fontWeight: 'semibold', fontStyle: 'Italic', mr: '10%', mt: '-20%'}}>Quote</Typography>
      </div>
      <div>
        <Typography align="left" sx={{fontSize: '3vw', fontFamily: 'Inter', fontWeight: 'semibold', fontStyle: 'Italic', ml: '10%', mt: '25%'}}>Content</Typography>
      </div>
      <div className="cloud_sea">
        <img src={cloud_sea} alt="Cloud and Sea"/>
      </div>
    </div>
    <div className="space-divider">
    </div>
    </>
  )
}

export default Concepts;