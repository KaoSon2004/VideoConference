import { Button, Tooltip, Typography } from "@mui/material";
import { Groups } from "@mui/icons-material";
import Avatar from "../../shared/Avatar";
import Fade from "@mui/material/Fade";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions";

const MainPageButton = () => {
  const { audioOnly } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleAudioOnly = () => {
    dispatch(actions.setAudioOnly(!audioOnly));
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { username } = useSelector((state) => state.auth);
  return (
    <Tooltip title={<h3>{username}</h3>} placement="right">
      <div>
        <Button
          onClick={handleClick}
          style={{
            width: "48px",
            height: "48px",
            minHeight: "0",
            color: "white",
            borderRadius: "15px",
            background: "linear-gradient(to left top,#6f3fcf,#1f78ff)",
            minWidth: "0",
            marginTop: "10px",
            padding: "0",
          }}
        >
          {username?.substring(0, 2)}
        </Button>
        <Menu
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          TransitionComponent={Fade}
          placement="right"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem
            sx={{
              borderBottom: "1px solid #ccc",
            }}
            onClick={toggleAudioOnly}
          >
            {audioOnly ? "Disable Audio Only" : "Enable Audio Only"}
          </MenuItem>

          <MenuItem onClick={() => dispatch(actions.logout())}>Logout</MenuItem>
        </Menu>
      </div>
    </Tooltip>
  );
};
export default MainPageButton;
