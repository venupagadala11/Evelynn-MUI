import React from 'react';
import c1 from '../../images/customers/1.png';
import './CustomerCard.css';
import {Box,Container} from '@mui/material';
import StartIcon from '@mui/icons-material/Start';
import twitter from '../../images/customers/twitter.png';


export default function CustomerCard({name,src,position}) {
  return (
    <Container >
      <fieldset className='customer-card'>
        <legend className='cus-img'><img className='customer-img' src={src} alt="D" /></legend>
        <Box className='customer-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Box>
        <Box className='customer-card-divider'></Box>
        <StartIcon className='start-icon'/><StartIcon className='start-icon'/><StartIcon className='start-icon'/><StartIcon className='start-icon'/><StartIcon className='start-icon'/>
        <Box className='name'>{name}</Box>
        <Box className='position'>{position} <img className='social-media' src={twitter} alt="twittwe" /></Box>
    </fieldset>
    </Container>
  )
}
