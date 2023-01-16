import React from 'react';
import './Cards.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import FeedIcon from '@mui/icons-material/Feed';
import DateRange from '@mui/icons-material/DateRange';
import Face from '@mui/icons-material/Face';
import Link from '@mui/material/Link';
import redFan from '../images/Red_Fan.png';

function Cards() {
  return (
    <div className='cards'>
            <div className="cards__wrapper">
              <Box
              position="absolute"
              sx={{
                ml: '8%',
                mt: '8%',
                width: '40vw',
                height: '40vw',
              }}>
              <Typography sx={{
                fontSize: '2.5vw',
                fontFamily: 'Inter',
                fontWeight: 'bold',
                lineHeight: '180%',
                color: '#0B3D89',
              }}> Free and transparent like wind and sea, 
                Daoism is a philosophy that seeks to explore the 
                essence of our universe.
              </Typography>
              </Box>
              <div className="b-wrap">
                <img src={redFan} alt="A red sun"/>
              </div>
              <Box position="absolute" 
              sx={{
                mt: '50vw',
                ml: '7vw',
                width: '60vw',
                height: 'auto',
                overflow: 'auto',
              }}>
                <List>
                  <ListItem sx={{mt: '0vw', ml: '0vw'}}>
                    <ListItemIcon>
                      <FeedIcon sx={{fontSize: '4vw', color: '#0B3D89'}}/>
                    </ListItemIcon>
                    <ListItemText> 
                      <Typography sx={{ml: '2vw', fontFamily: 'Inter', fontSize: '1.75vw', fontWeight: 'bold', color: '#0B3D89'}}>
                        <Link href='/Concepts' sx={{color: '#0B3D89'}}>Concepts:</Link>
                        &nbsp; Key ideas and stories in Daoism 
                      </Typography></ListItemText>
                  </ListItem>
                  <ListItem sx={{mt: '0.5vw', ml: '0vw'}}>
                    <ListItemIcon>
                      <DateRange sx={{fontSize: '4vw', color: '#0B3D89'}}/>
                    </ListItemIcon>
                    <ListItemText> 
                      <Typography sx={{ml: '2vw', fontFamily: 'Inter', fontSize: '1.75vw', fontWeight: 'bold', color: '#0B3D89'}}>
                      <Link href='/Timeline' sx={{color: '#0B3D89'}}>Timeline:</Link>
                      &nbsp; Origin, history, and major events
                      </Typography></ListItemText>
                  </ListItem>
                  <ListItem sx={{mt: '0.5vw', ml: '0vw'}}>
                    <ListItemIcon>
                      <CloudQueueIcon sx={{fontSize: '4vw', color: '#0B3D89'}}/>
                    </ListItemIcon>
                    <ListItemText> 
                      <Typography sx={{ml: '2vw' , fontFamily: 'Inter', fontSize: '1.75vw', fontWeight: 'bold', color: '#0B3D89'}}>
                      <Link href='/Explore' sx={{color: '#0B3D89'}}>Explore:</Link>
                        &nbsp; Open source Daoism knowledge database
                      </Typography></ListItemText>
                  </ListItem>
                  <ListItem sx={{mt: '0.5vw', ml: '0vw'}}>
                    <ListItemIcon>
                      <Face sx={{fontSize: '4vw', color: '#0B3D89'}}/>
                    </ListItemIcon>
                    <ListItemText> 
                      <Typography sx={{ml: '2vw' , fontFamily: 'Inter', fontSize: '1.75vw', fontWeight: 'bold', color: '#0B3D89'}}>
                      <Link href='/Playground' sx={{color: '#0B3D89'}}>Playground:</Link>
                      &nbsp; Share your knowledge with the community 
                      </Typography></ListItemText>
                  </ListItem>
              </List>
              </Box>
            </div>
    </div>
  )
}

export default Cards;