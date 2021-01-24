import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            React Book Store
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}