import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Button} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
    fontSize: '0.90rem'
  },
  span:{
    color: '#424242'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    history.push("/signin");
  };

  const handleRegisterClick = () => {
    history.push("/signup");
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
            <Button onClick={handleLoginClick} variant='outlined' className={classes.buttons}>Sign In</Button>
            <Button onClick={handleRegisterClick} variant='outlined' className={classes.buttons}>Sign Up</Button>
            {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="#424242"
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
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}