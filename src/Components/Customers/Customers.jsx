import React from 'react';
import c1 from '../../images/customers/1.png';
import c2 from '../../images/customers/3.png';
import c3 from '../../images/customers/2.png';
import c4 from '../../images/customers/4.png';
import CustomerCard from '../../common-components/Customer-card/CustomerCard';
import {Box,Container} from '@mui/material';
import './Customers.css'

export default function Customers() {
  return (
    <Container className='customer-container'>
        <Box className='service-title'>What our Customers Have to Say</Box>
        <Box className="align-text">
            <Box className='service-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Box>
        </Box>
        <Box className="customer-cards">
            <CustomerCard name="satya" role='CEO' src={c1}/>
            <CustomerCard name="Ram" price='Intern' src={c2}/>
            <CustomerCard name="josh" price='Developer' src={c3}/>
            <CustomerCard name="alex" price='Designer ' src={c4}/>
        </Box>
    </Container>
  )
}
