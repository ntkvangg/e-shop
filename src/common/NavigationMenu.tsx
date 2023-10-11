import React from "react";
// import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from "react-router-dom";
import { Badge, Box, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles'

const NavContainer = styled(Box)`
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid #ddd;

  @media (max-width: 786px) {
    padding: 5px 10px;
    font-size: 12px;
    .list-menu{
      display: none;
    }
  }
`;

const StyledInput = styled(TextField)(({ theme }: {theme: any}) => {
  return {
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme?.palette?.grey[200],
    borderRadius: '.2rem',
    '& fieldset': { borderColor: 'transparent' },
  },
}
})

const Logo = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 24px;
`;

const NavList = styled(Box)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled(Box)`
  margin: 0 20px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;



const NavigationMenu = () => {
  return (
    <NavContainer component={'nav'}>
      <Logo to="/">Your Logo</Logo>
      <NavList className="list-menu" component={'ul'}>
        <NavItem component={'li'}>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </NavItem>
        <NavItem component={'li'}>
          <NavLinkStyled to="/about">contact</NavLinkStyled>
        </NavItem>
        <NavItem component={'li'}>
          <NavLinkStyled to="/services">About</NavLinkStyled>
        </NavItem>
        <NavItem component={'li'}>
          <NavLinkStyled to="/contact-us">Sign Up</NavLinkStyled>
        </NavItem>
      </NavList>
      <Stack className="menu-toolbar" component={"div"} direction={"row"} spacing={1} alignItems={'center'}>
        <Box component={'form'}>
          <StyledInput 
            fullWidth 
            type="text" 
            placeholder="What are you looking for?" 
            variant="outlined"
            size="small" 
            label={null}
            InputProps={{
            endAdornment:(
                <InputAdornment position="end">
                  <SearchIcon />
              </InputAdornment>
            )
          }}/>
        </Box>
        <IconButton>
          <Badge badgeContent={2} color="error">
            <ShoppingCartIcon color="action"/>
          </Badge>
        </IconButton>
      </Stack>
    </NavContainer>

  );
};

export default NavigationMenu;
