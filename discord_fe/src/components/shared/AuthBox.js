import Box from "@mui/material/Box";
import logo from "../../assets/logo.png";
import background from "../../assets/background.png";
import { Grid } from "@mui/material";

const AuthBox = ({ children }) => {
  return (
    <Grid container
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      spacing={0}
      paddingLeft="1rem"
      paddingRight="1rem"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}>
      <Grid item xl={7} sm={8} xs={12}>
        <Box
          sx={{
            maxWidth: 700,
            bgcolor: "#36393f",
            borderRadius: "5px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {children}
        </Box>
      </Grid>
      <Grid item xl={5} sm={4} xs={12}>
        <Box component="img" src={logo} width="50%" className="floating" sx={{display:"flex", marginLeft: "auto", marginRight: "auto"}} />
      </Grid>
    </Grid>
  );
};

export default AuthBox;
