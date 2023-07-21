import { styled } from "@mui/system";
import { useState } from "react";
import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import AddFriendDialog from "../AddFriendDialog";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { IconButton, TextField } from "@mui/material";
import { useSelector } from "react-redux";
// const additionalStyles = {
//   marginTop: "10px",
//   backgroundColor: "#3ba55d",
// };
const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 12px",
});
function AddFriendButton() {
  const [open, setIsOpen] = useState(false);
  const handleAddFriend = () => {
    setIsOpen(true);
    console.log(open);
  };
  return (
    <Wrapper alignItems="center">
      <TextField
        variant="outlined"
        size="small"
        placeholder="Tìm kiếm"
        sx={{
          input: {
            color: "white",
            outline: "none",
            backgroundColor: "#eaedf0",
            color: "#081c36",
            borderRadius: "8px",
          },
        }}
      />
      <IconButton title="Thêm bạn" onClick={handleAddFriend} sx={{marginLeft: "6px"}}>
        <PersonAddIcon
          sx={{
            color: "white",
          }}
        />
      </IconButton>
      <AddFriendDialog openDialog={open} handleClose={() => setIsOpen(false)} />
    </Wrapper>
  );
}

export default AddFriendButton;
