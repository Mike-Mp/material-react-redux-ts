import { ArtTrack, Explore, Home, LibraryAdd, LibraryBooks, LibraryBooksSharp, LoginSharp, PictureAsPdf, PictureInPicture } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";


export default function MainNavigation() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="nav">
      <Button sx={{ color: "white" }} startIcon={<LibraryBooksSharp />}><NavLink to="/index" className={s => s.isActive ? "active" : ""}>Explore</NavLink></Button>
      <Button sx={{ color: "white" }} startIcon={<LoginSharp />}><NavLink to="/login" className={s => s.isActive ? "active" : ""}>Login</NavLink></Button>
    </Box>
  )
}
