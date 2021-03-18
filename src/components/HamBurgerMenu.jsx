import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: 300,
    height: 150,
    backgroundColor: "lightgrey",
    marginTop: -60,
    marginLeft: -120,
    '@media (max-width: 620px)': {
      width: 180,
      height: 100
    }
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "darkgrey",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    '@media (max-width: 620px)': {
      lineHeight: 25,
      minHeight: 30
    }
  },
}))(MenuItem);

const StyledButton = withStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, darkgrey 30%, lightgrey 90%)',
    border: 0,
    borderRadius: 50,
    color: "darkgrey",
    marginTop: 20,
    marginRight: 20,
    width: 75,
    height: 75,
    '@media (max-width: 620px)': {
      width: 55,
      height: 55
    }
  },
})
)(Button);

const StyledMenuIcon = withStyles((theme) => ({
  root: {
    fontSize: 48, 
    fontWeight: 500,
    '@media (max-width: 620px)': {
      fontSize: 38, 
      fontWeight: 500,
      }
  },
})
)(MenuIcon);

export default function HamBurgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton>
      <Button
        onClick={handleClick}
      >
        <StyledMenuIcon>
        <MenuIcon />
        </StyledMenuIcon>
      </Button>
      </StyledButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Jobs" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Projects" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Workshops" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
