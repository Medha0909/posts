import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = ({ state, setSearchResult }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResult(state);
    const resultArray = state.filter(
      (state) =>
        state.title.includes(e.target.value) ||
        state.body.includes(e.target.value)
    );

    setSearchResult(resultArray);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img
                style={{ height: "60px", width: "150px" }}
                src="https://api.logo.com/api/v2/images?logo=logo_cdc6d1db-1105-4f2a-97f1-90b87ae8a954&u=1717677230&width=500&height=400&fit=contain&margins=100&format=webp&quality=60"
                alt="..."
              ></img>
            </Typography>
            <Typography>
              <form className="search" onSubmit={handleSubmit}>
                <input
                  className="search_input"
                  type="text"
                  id="Search"
                  onChange={handleSearchChange}
                />
                <button className="search_button">
                  <FaMagnifyingGlass />
                </button>
              </form>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
