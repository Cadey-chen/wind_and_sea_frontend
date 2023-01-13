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
    console.log(props.books);
  return (
    <div>
        <div className="title-div">
        <Typography align="center" variant="h2" sx={{fontSize: 35, fontFamily: 'Inter', m: 6, mt: 10, mb: 2, fontWeight: 'bold', top: 6}}>Collection of Daoism Writings</Typography>
        </div>
            {
                props.books.map((content) => (
                    <div className="list-div">
                    <Accordion sx={{width: 1000, mb: 2, mt: 2}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        sx={{
                            height: 80,
                            borderRadius: '2%'
                        }}>
                            <Typography sx={{fontSize: 25, fontFamily: 'Inter', fontWeight: 'medium'}}>{content.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ml: 2}}>
                            <List sx={{width: 1000}} className="list-font">
                                <ListItemText>
                                    <Typography sx={{fontSize: 25}}>Name: {content.title}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: 25}}>Type: {content.type}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: 25}}>Author: {content.author}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography sx={{fontSize: 25}}>Description: {content.description}</Typography>
                                </ListItemText>
                                <ListItemText>
                                   <Typography sx={{fontSize: 25}}>URL: <a href={content.url}>{content.url}</a></Typography>
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