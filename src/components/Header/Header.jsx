import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import styles from './style';

const Header = ({ classes }) => (
  <AppBar position="static" color="default" className={classes.headBlock}>
    <Toolbar>
      <NavLink to="/" className={classes.noDecoration}>
        <Typography variant="h6" color="inherit">
          Board
        </Typography>
      </NavLink>
      
    </Toolbar>
  </AppBar>
);


export default withStyles(styles)(Header);
