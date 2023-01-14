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
        <Typography align="center" variant="h2" sx={{fontSize: '2vw', fontFamily: 'Inter', m: '3%', mb: '3%', fontWeight: 'bold'}}>Collection of Daoism Writings</Typography>
        </div>
            {
                props.books.map((content) => (
                    <div className="list-div">
                    <Accordion sx={{width: '80%', mb: '3%', mt: '3%'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        sx={{
                            height: '5vw',
                            borderRadius: '2%'
                        }}>
                            <Typography sx={{fontSize: '1.35vw', fontFamily: 'Inter', fontWeight: 'bold', m: '1%'}}>{content.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ml: '3%'}}>
                            <List sx={{width: '100%'}}>
                                <ListItemText>
                                    <Typography sx={{fontSize: '1.25vw'}}>Name: {content.title}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: '1.25vw'}}>Type: {content.type}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: '1.25vw'}}>Author: {content.author}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: '1.25vw'}}>Description: {content.description}</Typography>
                                </ListItemText>
                                <ListItemText>
                                   <Typography sx={{fontSize: '1.25vw'}}>URL: <a href={content.url}>{content.url}</a></Typography>
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