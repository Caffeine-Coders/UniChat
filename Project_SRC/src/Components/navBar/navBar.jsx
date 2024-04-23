"use client";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import chatGPTLogo from "../../Assets/ChatGPT_icon.png";
import Logout from "@mui/icons-material/Logout";
import { LogoutUser } from "../../Services/User";
import Settings from "@mui/icons-material/Settings";
import {
  IconButton,
  Badge,
  Button,
  Typography,
  Toolbar,
  InputBase,
  Box,
  Avatar,
  Stack,
  AppBar,
  styled,
  ThemeProvider,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import ThemeContext from "../Contexts/themeContext";
import AuthContext from "../Contexts/authContext";
import ChatGPTBox from "../ChatGPT/ChatGPTBox";

const StyledButton = styled(Button)(({ theme }) => ({
  width: "135px",
  height: "30px",
  borderRadius: 5,
  backgroundColor: theme.palette.primary.ButtonColor,
  color: theme.palette.primary.whites,
  "&:hover": {
    backgroundColor: theme.palette.primary.ButtonHover,
    color: theme.palette.primary.whites,
  },
  fontFamily: theme.typography.fontFamily[0],
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  color: theme.palette.primary.textcolor,
  "&:hover": {
    transform: "scale(1.17)",
    backgroundColor: "transparent",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // backgroundColor: theme.palette.primary.hover,
  marginRight: 0,
  height: "40px",
  width: "150px",
  marginLeft: 0,
  borderRadius: 6,
  "& .hoverIcon": {
    color: theme.palette.primary.ButtonHover,
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
  color: theme.palette.primary.textcolor,
  height: "100%",
  width: "100%",
  fontSize: "14px",

  "& .MuiInputBase-input": {
    fontFamily: "'Kode Mono', monospace",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({}));

export default function NavBar({ projects }) {
  const router = new useRouter();
  const [openChatGPT, setOpenChatGPT] = useState(false);

  const toggleChatGPT = () => {
    setOpenChatGPT(!openChatGPT);
  };

  const handleChatGPTClose = () => {
    setOpenChatGPT(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openProfileMenu = Boolean(anchorEl);
  const handleClickProfile = (event) => {
    setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget));
  };
  const handleCloseProfileMenu = () => {
    setAnchorEl(null);
  };

  const { theme } = useContext(ThemeContext);

  const { userImage } = useContext(AuthContext);

  const logout = () => {
    LogoutUser()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error logging out: ", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          borderRadius: 3,
          position: "fixed",
          width: { xl: "80%", lg: "75%", md: "68%", sm: "100%" },
          left: 344,
          top: 16,
          zIndex: 0,
        }}
      >
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
            <div
              className="hoverIcon"
              style={{ width: "100%", height: "100%" }}
            >
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
                <Typography variant="">+ Project</Typography>
              </StyledButton>
              <StyledIconButton color="inherit" onClick={toggleChatGPT}>
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
                <Badge
                  sx={{
                    ".MuiBadge-dot": {
                      backgroundColor: theme.palette.primary.ButtonHover,
                    },
                  }}
                  variant="dot"
                  overlap="circular"
                >
                  <NotificationsIcon />
                </Badge>
              </StyledIconButton>
              <StyledIconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClickProfile}
              >
                <Avatar sx={{ height: 30, width: 30 }}>
                  <Image src={userImage} width={30} height={30} />
                </Avatar>
              </StyledIconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openProfileMenu}
                onClose={handleCloseProfileMenu}
                onClick={handleCloseProfileMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleCloseProfileMenu}>
                  <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseProfileMenu}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      {openChatGPT && (
        <ChatGPTBox
          isOpen={openChatGPT}
          onClose={handleChatGPTClose}
          projects={projects}
        />
      )}
    </ThemeProvider>
  );
}
