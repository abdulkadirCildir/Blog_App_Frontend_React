import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Button} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppContext } from '../context/AppContext'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'url(navbar.png)',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  bar: {
    justifyContent: 'space-between',
    // margin: '0rem 0'
  },
  icon: {
    width:'60px', 
    height: '60px',
    marginRight: '0.5rem'
  },
  title : {
    margin: '1rem',
    fontSize: '2.5rem',
    color: 'white',
    fontFamily: 'Dancing Script, cursive',
    letterSpacing: '1px' 
  },
  headerLeft: {
    marginLeft: '3rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
    textDecoration: 'none',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttons: {
    margin: '5px',
    color: '#424242',
    fontSize: '0.90rem',
  },
  span:{
    color: '#424242',
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const { token, setToken } = useContext(AppContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    history.push('/');
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleRegisterClick = () => {
    history.push("/register");
  };

  return (
    <div >
      <AppBar className={classes.root}>
        <Toolbar className={classes.bar}>
          <Typography variant="h6" >
            <a href={'/'} className={classes.headerLeft} >
              <img src='icon.png' alt="icon" className={classes.icon}/>
              <p className={classes.title}>Clarus<span className={classes.span}>Blog</span></p>
            </a>
          </Typography>
          <div className={classes.headerRight}>
          {token ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <>
            <Button onClick={handleLoginClick} variant='outlined' className={classes.buttons}>Login</Button>
            <Button onClick={handleRegisterClick} variant='outlined' className={classes.buttons}>Sign up</Button>
            </>
          )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}