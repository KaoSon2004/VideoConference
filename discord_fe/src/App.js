import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Friends from "./pages/Friends";
import ForgotPassword from "./pages/ForgotPassword";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const locaion = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (locaion.pathname == "/") {
      navigate("/dashboard");
    }
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/friends" element={<Friends />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
