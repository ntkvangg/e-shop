import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const NavContainer = styled.nav`
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid #ddd;

  @media (max-width: 600px) {
    padding: 5px 10px;
    font-size: 12px;
    .list-menu{
      display: none;
    }
    .menu-toolbar{
      display: none;
    }
  }
`;

const Logo = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 24px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin: 0 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
`;


const CartIcon = styled.span`
  margin-right: 20px;
  cursor: pointer;
`;


const Wrapper = styled.div`

`;


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #eee;
  background-color: #eee;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  width: 200px;
  padding-left: 30px;
  margin-right: 10px;
`;

const SearchIconWrapper = styled.i`
  position: absolute;
  padding-left: 10px;
`;


const NavigationMenu = () => {
  return (
    <NavContainer>
      <Logo href="/">Your Logo</Logo>
      <NavList className="list-menu">
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
      <ToolbarContainer className="menu-toolbar">
        <SearchContainer>
          <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
          <SearchInput type="text" placeholder="Search..." />
        </SearchContainer>
        <CartIcon><ShoppingCartIcon /></CartIcon>
      </ToolbarContainer>
    </NavContainer>

  );
};

export default NavigationMenu;
