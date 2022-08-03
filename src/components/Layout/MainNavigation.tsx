import { ArtTrack, Explore, Home, LibraryAdd, LibraryBooks, LibraryBooksSharp, LoginSharp, Logout, PictureAsPdf, PictureInPicture } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";


export default function MainNavigation() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="nav">
      <Button sx={{ color: "white" }} startIcon={<LibraryBooksSharp />}><NavLink to="/index" className={s => s.isActive ? "active" : ""}>Explore</NavLink></Button>
      {
        !isLoggedIn &&
        <Button sx={{ color: "white" }} startIcon={<LoginSharp />}><NavLink to="/login" className={s => s.isActive ? "active" : ""}>Login</NavLink></Button>
      }
      {
        isLoggedIn &&
        <Button sx={{ color: "white" }} startIcon={<LoginSharp />}><NavLink to="/:user/profile" className={s => s.isActive ? "active" : ""}>Profile</NavLink></Button>
      }
      {
        isLoggedIn &&
        <Button sx={{ color: "white", marginLeft: "20px" }} startIcon={<Logout />}><NavLink to="/" className={s => s.isActive ? "active" : ""}>Logout</NavLink></Button>
      }
    </Box>
  )
}
