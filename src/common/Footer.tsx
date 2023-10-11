import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {NavLink } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const ContainerStyled = styled.div`
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5rem;
    background-color: #000;
    color: #fff;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: flex-start;
        padding: 1rem;
    }
`
const ColumnStyled = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .menu-item: hover{
        cursor: pointer;
        color: #1da1f2;
        text-decoration: underline;
    }
`

export default function Footer() {
  return (
    <footer className='footer'>
        <ContainerStyled>
            <ColumnStyled>
                <Typography variant="h6" component="div" sx={{fontSize: '1rem'}}>FOLLOW US</Typography>
                <Stack direction="row">
                    <IconButton color="secondary"><InstagramIcon/></IconButton>
                    <IconButton color="secondary"> <FacebookIcon/></IconButton>
                </Stack>
            </ColumnStyled>
            <ColumnStyled>
                <Typography variant="h6" component="div" sx={{fontSize: '1rem'}}>ABOUT US</Typography>
                <Box component="ul" sx={{listStyle: 'none', padding: 0, marginTop: 0, 'a': {textDecoration: 'none', color: '#fff'}}}>
                    <Box component="li" sx={{padding: '0 0 0.5rem'}}>
                        <NavLink to="/about-us" className='menu-item'>About us</NavLink>
                    </Box>
                    <Box component="li" sx={{padding: '.5rem 0'}}>
                        <NavLink to="/contact-us" className='menu-item'>Contact us</NavLink>
                    </Box>
                    <Box component="li" sx={{padding: '.5rem 0'}}>
                        <NavLink to="/careers" className='menu-item'>Careers</NavLink>
                    </Box>
                </Box>
            </ColumnStyled>
            <ColumnStyled>
                <Typography variant="h6" component="div" sx={{fontSize: '1rem'}}>CONTACT US</Typography>
                <Box component="div">
                    <Stack direction="row" spacing={2} sx={{marginBottom: '.5rem'}}>
                        <PhoneIcon fontSize='small'/> 
                        <Typography variant="subtitle1" component="div" sx={{fontSize: '.875rem', display: 'flex', alignItems: 'center'}}>+1 234 567 89</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{marginBottom: '.5rem'}}>
                        <LocationOnIcon fontSize='small'/>
                        <Typography variant="subtitle1" component="div" sx={{fontSize: '.875rem', display: 'flex', alignItems: 'center'}}>  1 23 Street Name, City, England</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{marginBottom: '.5rem'}}>
                        <EmailIcon fontSize='small'/> 
                        <Typography variant="subtitle1" component="div" sx={{fontSize: '.875rem', display: 'flex', alignItems: 'center'}}> eshop@gmail.com</Typography>
                    </Stack>
                </Box>
            </ColumnStyled>
        </ContainerStyled>
    </footer>
  )
}
