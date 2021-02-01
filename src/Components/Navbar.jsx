import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Badge, IconButton, Button} from '@material-ui/core';
import logo from '../assets/logo.png'
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = ({cart}) => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.root} >
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Button component={Link} to='/E-Commerce'>
                  <img src={logo} alt="logo" height="40px"/>
                </Button>                
                <Typography variant="h6" className={classes.title}>
                    Fantastic Shop
                </Typography>
                <IconButton component={Link} to='/cart' aria-label="show cart items" color="inherit">
                    <Badge color='secondary' badgeContent={cart.total_items}>
                        <ShoppingCart/>
                    </Badge>  
                </IconButton>
                </Toolbar>
            </AppBar>
            </div>
        </div>
    )
}

export default Navbar
