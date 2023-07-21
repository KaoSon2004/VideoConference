import { styled } from "@mui/system";
import DropDown from "./Dropdown";
import ChatLabel from "./ChatLabel";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Invitation from "./Invitation";

const MainContainer = styled("div")({
  height: "48px",
  width: "100%",
  padding: "0 15px",
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid black",
  backgroundColor: "#36393F",
});
function Appbar() {
  const location = useLocation();
  const [isDashBoard, setIsDashBoard] = useState(true);
  console.log(location.pathname);
  useEffect(() => {
    if (location.pathname == "/dashboard") {
      setIsDashBoard(true);
    } else {
      setIsDashBoard(false);
    }
  }, [location.pathname]);
  return (
    <MainContainer>
      {isDashBoard ? <ChatLabel /> : <Invitation />}
    </MainContainer>
  );
}

export default Appbar;
