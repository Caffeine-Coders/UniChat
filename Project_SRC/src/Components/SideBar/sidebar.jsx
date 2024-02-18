// Desc: SideBar component for the application.
"use client";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@emotion/react";
import { lighttheme, darktheme } from "../themes";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ThemeContext from "../themeContext";

//================================icons=======================
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import AirlineStopsOutlinedIcon from "@mui/icons-material/AirlineStopsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import "./sidebar.css";
import sidebarlogo from "../../Assets/sidebaricon.png";
import { palette } from "@mui/system";

const drawerWidth = 300;
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: "95%",
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(0%)",
    backgroundColor: theme.palette.primary.hover,
    "&.Mui-checked": {
      transform: "translateX(750%)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.hover,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.hover === "dark" ? "#47147B" : "#fdb813",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    borderRadius: 20 / 2,
    backgroundColor: theme.palette.primary.hover,
  },
}));


const SideBar = (props) => {
   
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { setTheme, theme } = React.useContext(ThemeContext);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  {
    /* Home, All project discord dropdown, Port to KF, Settings, Help & getting started */
  }

  const toggleTheme = () => {
    setTheme(theme === lighttheme ? darktheme : lighttheme);
  };

  const Sidedraw = (
    <div style={{ position: "relative", height: "100%" }}>
      <List sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* logo and name */}
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontFamily: (theme) => theme.typography.fontFamily[1],
              fontWeight: 50,
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
              mt: 2,
              letterSpacing: 5,
            }}
            style={{ fontSize: "25px" }}
          >
            UniChat
          </Typography>
        </Box>

        <Divider sx={{ m: 1 }} />

        <ListItem>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.hover,
              },
              borderRadius: 4,
            }}
          >
            <ListItemIcon
              sx={{ color: (theme) => theme.palette.primary.textcolor }}
            >
              <HomeOutlinedIcon />
            </ListItemIcon>

            <Typography
              variant="body2"
              sx={{ color: (theme) => theme.palette.primary.textcolor }}
            >
              Home
            </Typography>
          </ListItemButton>
        </ListItem>
        <Accordion
          sx={{
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: 4,
            boxShadow: "none",
            padding: "0px 16px", // Add padding here. Adjust the value as needed.
            "&.MuiAccordion-root": {
              "&:before": {
                // This is the line that separates the Accordion items
                height: "0px", // Set this to '0px' to remove the line
              },
              "&.Mui-expanded": {
                margin: "0px", // Remove the margin when the Accordion is expanded
              },
            },
            // '& .MuiAccordionSummary-root': {
            //     '&:hover': {
            //         backgroundColor: 'transparent', // Remove the hover effect from the AccordionSummary
            //     },
            // },
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              borderRadius: 4, // Add border radius here
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.hover,
              }, // Apply the hover effect here
              "&.Mui-expanded": {
                backgroundColor: (theme) => theme.palette.primary.hover, // Set the expanded color here
              },
            }}
          >
            <ListItemIcon
              sx={{ color: (theme) => theme.palette.primary.textcolor }}
            >
              <DvrOutlinedIcon />
            </ListItemIcon>

            <Typography
              variant="body2"
              sx={{ color: (theme) => theme.palette.primary.textcolor }}
            >
              All Projects
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                width: "100%",
                color: (theme) => theme.palette.primary.textcolor,
                borderRadius: 4,
              }}
            >
              <Button
                sx={{
                  color: (theme) => theme.palette.primary.ButtonColor,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.hover,
                  },
                }}
                startIcon={<ConstructionOutlinedIcon />}
              >
                <Typography style={{ fontSize: "13px" }}>Project 1</Typography>
              </Button>
              <Divider
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.textcolor,
                }}
              />
              <Button
                sx={{
                  color: (theme) => theme.palette.primary.ButtonColor,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.hover,
                  },
                }}
                startIcon={<ConstructionOutlinedIcon />}
              >
                <Typography style={{ fontSize: "13px" }}>Project 2</Typography>
              </Button>
              <Divider
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.textcolor,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.hover,
                  },
                }}
              />
              <Button
                sx={{
                  color: (theme) => theme.palette.primary.ButtonColor,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.hover,
                  },
                }}
                startIcon={<ConstructionOutlinedIcon />}
              >
                <Typography style={{ fontSize: "13px" }}>Project 3</Typography>
              </Button>
              <Divider
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.textcolor,
                }}
              />
              <Button
                sx={{
                  color: (theme) => theme.palette.primary.ButtonColor,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.hover,
                  },
                }}
                startIcon={<ConstructionOutlinedIcon />}
              >
                <Typography style={{ fontSize: "13px" }}>Project 4</Typography>
              </Button>
              <Divider
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.textcolor,
                }}
              />
              <Button
                sx={{
                  color: (theme) => theme.palette.primary.ButtonColor,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.hover,
                  },
                }}
                startIcon={<ConstructionOutlinedIcon />}
              >
                <Typography style={{ fontSize: "13px" }}>Project 5</Typography>
              </Button>
              <Divider
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.textcolor,
                }}
              />
            </Stack>
          </AccordionDetails>
        </Accordion>

        <ListItem>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.hover,
              },
              borderRadius: 4,
            }}
          >
            <ListItemIcon
              sx={{ color: (theme) => theme.palette.primary.textcolor }}
            >
              <AirlineStopsOutlinedIcon />
            </ListItemIcon>
            <Typography
              variant="body2"
              sx={{ color: (theme) => theme.palette.primary.textcolor }}
            >
              Port to KF
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.hover,
              },
              borderRadius: 4,
            }}
          >
            <ListItemIcon
              sx={{ color: (theme) => theme.palette.primary.textcolor }}
            >
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <Typography
              variant="body2"
              sx={{ color: (theme) => theme.palette.primary.textcolor }}
            >
              Settings
            </Typography>
          </ListItemButton>
        </ListItem>
        {/* footer of bar */}
        <Divider
          sx={{
            position: "fixed",
            width: 285,
            bottom: 100,
            mt: 45,
            ml: 1,
            mr: 1,
            mb: 2,
          }}
        />
        <ListItem sx={{ position: "relative" }}>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.hover,
              },
              borderRadius: 4,
            }}
          >
            <ListItemIcon
              sx={{
                color: (theme) => theme.palette.primary.textcolor,
                position: "fixed",
                bottom: 80,
              }}
            >
              <HelpOutlineOutlinedIcon fontSize="small" />
              <Typography
                variant="body2"
                sx={{
                  color: (theme) => theme.palette.primary.textcolor,
                }}
              >
                Help & Getting Started
              </Typography>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ position: "fixed", width: 320, bottom: 20 }}>
          <MaterialUISwitch defaultChecked onChange={toggleTheme} />
        </ListItem>
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          }}
        >
          {Sidedraw}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none",
              height: "96vh",
              backgroundColor: (theme) => theme.palette.primary.main,
              m: 2,
              borderRadius: 3,
            },
          }}
          open
        >
          {Sidedraw}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default SideBar;
