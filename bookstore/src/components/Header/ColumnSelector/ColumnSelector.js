import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { columnSelection } from "../../../redux";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
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
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function ColumnSelector() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const columnsChecked = useSelector((state)=>state.columnsVisible.selection);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColumnSelection=(selectableColumnIndex)=>{
    dispatch(columnSelection(selectableColumnIndex));
  }

  return (
    <div>
      <IconButton aria-label="column selector" onClick={handleClick}>
             <VisibilityOffIcon/>
    </IconButton>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <StyledMenuItem onClick={()=>handleColumnSelection(0)}>
          <ListItemIcon>
          <Checkbox edge="start" tabIndex={-1} disableRipple checked={columnsChecked[0]}/>
          </ListItemIcon>
          <ListItemText primary="Book Title" />
        </StyledMenuItem>
        <StyledMenuItem onClick={()=>handleColumnSelection(1)}>
          <ListItemIcon>
          <Checkbox edge="start" tabIndex={0} disableRipple checked={columnsChecked[1]}/>
          </ListItemIcon>
          <ListItemText primary="Author" />
        </StyledMenuItem>
        <StyledMenuItem onClick={()=>handleColumnSelection(2)}>
          <ListItemIcon>
          <Checkbox edge="start" tabIndex={1} disableRipple checked={columnsChecked[2]}/>
          </ListItemIcon>
          <ListItemText primary="Rating" />
        </StyledMenuItem>
        <StyledMenuItem onClick={()=>handleColumnSelection(3)}>
          <ListItemIcon>
          <Checkbox edge="start" tabIndex={2} disableRipple checked={columnsChecked[3]}/>
          </ListItemIcon>
          <ListItemText primary="Language" />
        </StyledMenuItem>
        <StyledMenuItem onClick={()=>handleColumnSelection(4)}>
          <ListItemIcon>
          <Checkbox edge="start" tabIndex={-1} disableRipple checked={columnsChecked[4]}/>
          </ListItemIcon>
          <ListItemText primary="Price" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}