"use client";
import * as React from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { darktheme } from "../themes";
import chatGPTLogo from "../../Assets/ChatGPT_icon.png";
import studentAvatar from "../../Assets/Student_Avatar.jpg";
import {
  IconButton,
  Badge,
  Button,
  Typography,
  Toolbar,
  InputBase,
  Box,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Stack,
  AppBar,
  styled,
  ThemeProvider,
} from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.rare,
  width: "135px",
  height: "30px",
  borderRadius: 5,
  color: theme.palette.primary.textcolor,
  "&:hover": {
    backgroundColor: theme.palette.primary.ButtonColor,
    color: theme.palette.primary.main,
  },
  fontFamily: theme.typography.fontFamily[0],
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  "&:hover": {
    transform: "scale(1.17)",
    backgroundColor: "transparent",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.primary.hover,
  marginRight: 0,
  height: "40px",
  width: "150px",
  marginLeft: 0,
  borderRadius: 6,
  "&:hover": {
    "& .hoverIcon": {
      color: theme.palette.primary.ButtonColor,
    },
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "400px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "100%",
  width: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({

}));

export default function PrimarySearchAppBar() {
  return (
    <ThemeProvider theme={darktheme}>
      <AppBar position="static" sx={{ borderRadius: 3 }}>
        <Toolbar
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            borderRadius: 3,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <div className="hoverIcon">
                <StyledSearchIcon />
              </div>
            </SearchIconWrapper>
            <div className="hoverIcon" style={{width: '100%', height: '100%'}}>
              <StyledInputBase
                placeholder="Search or type a command"
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <StyledButton>
                <Typography variant="body2">+ Project</Typography>
              </StyledButton>
              <StyledIconButton color="inherit">
                <Image
                  src={chatGPTLogo}
                  alt="ChatGPT Icon"
                  width={24}
                  height={24}
                />
              </StyledIconButton>
              <StyledIconButton
                aria-label="show new notifications"
                size="small"
              >
                <Badge color="error" variant="dot" overlap="circular">
                  <NotificationsIcon />
                </Badge>
              </StyledIconButton>
              <StyledIconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <Avatar sx={{ height: 30, width: 30 }}>
                  <Image src={studentAvatar} />
                </Avatar>
              </StyledIconButton>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
