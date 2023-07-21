import styled from "@emotion/styled";

const Wrapper = styled("div")({
  height: "42px",
  width: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "20px",
  backgroundColor: "#5865f2",
  borderRadius: "999px",
  color: "white"
});

function Avatar({ username }) {
  return <Wrapper>{username?.substring(0, 2)}</Wrapper>;
}
export default Avatar;
