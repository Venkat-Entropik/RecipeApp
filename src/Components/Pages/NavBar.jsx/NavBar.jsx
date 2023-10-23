import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/home");
  };
  const handleFav = () => {
    navigate("/fav");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={handleNavigate}
          >
            FOOD STUDIO
            <FastfoodIcon />
          </Typography>
          <Button
            color="inherit"
            onClick={handleFav}
            endIcon={<FavoriteIcon />}
          >
            Favorite
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
