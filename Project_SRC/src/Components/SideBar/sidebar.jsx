// Desc: SideBar component for the application.
"use client";
import React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";
import { lighttheme, darktheme } from "../Themes/Themes";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ThemeContext from "../Contexts/themeContext";
import { useContext, useState, useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";

//================================icons=======================
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import AirlineStopsOutlinedIcon from "@mui/icons-material/AirlineStopsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

import "./sidebar.css";

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
    backgroundColor: theme.palette.mode === "dark" ? "#47147B" : "#fdb813",
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

const SideBar = ({ projects }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { setTheme, theme } = useContext(ThemeContext);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleHomeClick = () => {
    localStorage.setItem("discordServerId", "noProjectSelected");
    setIsAccordionOpen(false);
  };

  const [openPicker, data] = useDrivePicker();

  const handleOpenPicker = async () => {
    const apiToken = sessionStorage.getItem("googleAccessToken");
    openPicker({
      clientId:
        "390698529758-97a4j6gnlmlv6mrmjlerb6l4qejt8r7s.apps.googleusercontent.com",
      developerKey: "AIzaSyCUEwSsinL08-FGU48bz4mt8lXMMwKvIcQ",
      viewId: "DOCS",
      showUploadView: true,
      token: apiToken,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: async (data) => {
        localStorage.setItem("selectedDoc", data.docs[0].embedUrl);
        localStorage.setItem("selectedDocId", data.docs[0].id);
      },
    });
  };

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

  const toggleTheme = () => {
    setTheme(theme === lighttheme ? darktheme : lighttheme);
  };

  const Sidedraw = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box
        sx={{
          top: 0,
          width: "100%",
          justifyContent: "center",
          position: "sticky",
          alignItems: "center",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Kode Mono", monospace',
            fontWeight: 50,
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
            mt: 4,
            letterSpacing: 5,
          }}
        >
          UniChat
        </Typography>
        <Divider
          sx={{
            width: 285,
          }}
        />
      </Box>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <ListItem>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.hover,
              },
              borderRadius: 4,
            }}
            onClick={handleHomeClick}
          >
            <ListItemIcon>
              <HomeOutlinedIcon
                sx={{ color: theme.palette.primary.ButtonColor }}
              />
            </ListItemIcon>

            <Typography
              sx={{
                color: (theme) => theme.palette.primary.textcolor,
                fontFamily: theme.typography.fontFamily[0],
              }}
            >
              Home
            </Typography>
          </ListItemButton>
        </ListItem>
        <Accordion
          expanded={isAccordionOpen} // Use the state here
          onChange={() => setIsAccordionOpen(!isAccordionOpen)} // Update the state when the accordion is clicked
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
            expandIcon={
              <ArrowDownwardIcon
                sx={{ color: theme.palette.primary.ButtonColor }}
              />
            }
            aria-controls="panel1-content"
            disabled={!projects}
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
              <DvrOutlinedIcon
                sx={{ color: theme.palette.primary.ButtonColor }}
              />
            </ListItemIcon>

            <Typography
              sx={{
                color: (theme) => theme.palette.primary.textcolor,
                fontFamily: theme.typography.fontFamily[0],
              }}
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
                borderRadius: 4,
              }}
            >
              {projects ? (
                projects.map((project) => (
                  <React.Fragment key={project.id}>
                    <Button
                      sx={{
                        alignContent: "left",
                        justifyContent: "left",
                        color: (theme) => theme.palette.primary.textcolor,
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.primary.hover,
                        },
                      }}
                      startIcon={
                        <ConstructionOutlinedIcon
                          sx={{ color: theme.palette.primary.ButtonColor }}
                        />
                      }
                      onClick={() => {
                        localStorage.setItem(
                          "discordServerId",
                          project.discordServerId
                        );
                      }}
                    >
                      <Typography
                        style={{
                          fontSize: "12px",
                          textAlign: "left",
                          fontFamily: theme.typography.fontFamily[0],
                        }}
                      >
                        {project.projectName}
                      </Typography>
                    </Button>
                    <Divider
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.primary.ButtonColor,
                      }}
                    />
                  </React.Fragment>
                ))
              ) : (
                <Typography
                  variant="body2"
                  sx={{ color: (theme) => theme.palette.primary.textcolor }}
                >
                  No Projects Found!
                </Typography>
              )}
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
              <AirlineStopsOutlinedIcon
                sx={{ color: theme.palette.primary.ButtonColor }}
              />
            </ListItemIcon>
            <Typography
              sx={{
                color: (theme) => theme.palette.primary.textcolor,
                fontFamily: theme.typography.fontFamily[0],
              }}
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
            onClick={handleOpenPicker}
          >
            <ListItemIcon
              sx={{ color: (theme) => theme.palette.primary.textcolor }}
            >
              <DriveFolderUploadIcon
                sx={{ color: theme.palette.primary.ButtonColor }}
              />
            </ListItemIcon>
            <Typography
              sx={{
                color: (theme) => theme.palette.primary.textcolor,
                fontFamily: theme.typography.fontFamily[0],
              }}
            >
              My Google Drive
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          position: "sticky",
          alignItems: "center",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          marginTop: "auto",
          flexShrink: 0,
        }}
      >
        <Divider
          sx={{
            width: 285,
          }}
        />
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
              <HelpOutlineOutlinedIcon
                sx={{ color: theme.palette.primary.ButtonColor }}
              />
            </ListItemIcon>
            <Typography
              sx={{
                color: (theme) => theme.palette.primary.textcolor,
                fontFamily: theme.typography.fontFamily[0],
                fontSize: 14,
              }}
            >
              Help & Getting Started
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ width: 320 }}>
          <MaterialUISwitch defaultChecked onChange={toggleTheme} />
        </ListItem>
      </Box>
    </div>
  );
  const container =
    typeof window !== undefined ? () => window.document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
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
