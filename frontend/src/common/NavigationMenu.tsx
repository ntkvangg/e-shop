import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from "react-router-dom";
import { Badge, Box, ClickAwayListener, Grow, IconButton, InputAdornment, MenuItem, MenuList, Paper, Popper, Stack, TextField } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const NavContainer = styled(Box)`
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid #ddd;
  .menu-mobile{
    display: none;
  }
  .menu-mobile-popper{
    width: 650px;
  }

  @media (max-width: 786px) {
    padding: 5px 10px;
    font-size: 12px;
    .list-menu{
      display: none;
    }
    .menu-mobile{
      display: block;
    }
    .menu-mobile-popper{
      width: 300px;
    }
  }
`;

const StyledInput = styled(TextField)(({ theme }: { theme: any }) => {
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
  const [open, setOpen] = React.useState(false);
  const anchroRef = React.useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    setOpen(false);
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  return (
    <NavContainer component={'nav'}>
      <Stack direction={'row'} spacing={1} justifyItems={'center'}>
        <>
          <IconButton
            className="menu-mobile"
            ref={anchroRef}
            size="large"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchroRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            className="menu-mobile-popper"
            sx={{ zIndex: 1000}}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>About</MenuItem>
                      <MenuItem onClick={handleClose}>Contact</MenuItem>
                      <MenuItem onClick={handleClose}>Services</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </>
        <MenuItem sx={{paddingTop: 0}}>
          <Logo to="/">Your Logo</Logo>
        </MenuItem>
      </Stack>


      <NavList className="list-menu" component={'ul'}>
        <NavItem component={'li'}>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </NavItem>
        <NavItem component={'li'}>
          <NavLinkStyled to="/about">Contact</NavLinkStyled>
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
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }} />
        </Box>
        <IconButton>
          <Badge badgeContent={2} color="error">
            <ShoppingCartIcon color="action" />
          </Badge>
        </IconButton>
      </Stack>
    </NavContainer>

  );
};

export default NavigationMenu;
