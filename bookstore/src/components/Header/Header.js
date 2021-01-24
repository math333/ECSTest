import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge, MenuItem, Menu } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/More';
import { useSelector } from 'react-redux';
import useStyles from "./styles";
import SearchBox from "./SearchBox/SearchBox";
import DensityToggler from "./DensityToggler/DensityToggler";
import { Link } from 'react-router-dom';

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const itemsInCart = useSelector((state)=>state.itemsInCart.items);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
 
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/"  className={classes.mobilePageLink}>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <HomeIcon/>
        </IconButton>
        <p>Home</p>
        </MenuItem>
        </Link>
        <Link to="/cart"  className={classes.mobilePageLink}>
      <MenuItem>
          <IconButton aria-label="ShoppingCart" color="inherit">
          <Badge badgeContent={itemsInCart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>ShoppingCart</p>
        </MenuItem>
        </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            React Book Store
          </Typography>
          <SearchBox/>
          <DensityToggler/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Link to="/" className={classes.pageLink}>
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <HomeIcon />
            </IconButton>
            </Link>
           <Link to="/cart" className={classes.pageLink}>
            <IconButton aria-label="ShoppingCart" color="inherit">
              <Badge badgeContent={itemsInCart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            </Link>
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}