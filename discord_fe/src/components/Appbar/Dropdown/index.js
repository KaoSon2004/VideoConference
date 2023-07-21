import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions";
export default function DropDown() {
  const { audioOnly } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    dispatch(actions.logout());
  };
  const toggleAudioOnly = () => {
    dispatch(actions.setAudioOnly(!audioOnly));
  };
  return (
    <div>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <MenuItem onClick={toggleAudioOnly}>
          {audioOnly ? "Disable Audio Only" : "Enable Audio Only"}
        </MenuItem>
      </Menu>
    </div>
  );
}
