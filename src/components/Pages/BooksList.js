import React from 'react';
import './BooksList.css';
import '../../App.css';
import Collapsible from 'react-collapsible';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

function BooksList({props}) {
  return (
    <div>
        <div className="title-div">
        <Typography align="center" variant="h2" sx={{fontSize: '2vw', fontFamily: 'Inter', m: '3%', mb: '3%', fontWeight: 'bold', color: '#0B3D89'}}>Collection of Daoism Writings</Typography>
        </div>
            {
                props.books.map((content) => (
                    <div className="list-div">
                    <Accordion sx={{width: '80%', mb: '3%', mt: '3%'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{width: '3.2vw', height: '3.2vw'}}/>}
                        sx={{
                            height: '6vw',
                            borderRadius: '2%',
                            overflow: 'hidden'
                        }}>
                            <Typography sx={{fontSize: '1.35vw', fontFamily: 'Inter', fontWeight: 'bold', m: '2%', color: '#0B3D89'}}>{content.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ml: '3%', overflow: 'auto'}}>
                            <List sx={{width: '100%'}}>
                                <ListItemText>
                                    <Typography sx={{fontSize: '1.25vw', maxWidth: '100%'}}>Name: {content.title}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: '1.25vw', maxWidth: '100%'}}>Type: {content.type}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: '1.25vw', maxWidth: '100%'}}>Author: {content.author}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: '1.25vw', maxWidth: '100%'}}>Description: {content.description}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: '1.25vw', maxWidth: '100%'}}>Year Published: {content.yearPublished}</Typography>
                                </ListItemText>
                                <ListItemText>
                                   <Typography sx={{fontSize: '1.25vw', maxWidth: '78vw'}}>URL: <a className="link-wrap" href={content.url}>{content.url}</a></Typography>
                                </ListItemText>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                ))
            }
    </div>
  );
}

export default BooksList;