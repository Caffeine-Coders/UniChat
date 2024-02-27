import React from "react";
import Divider from "@mui/material/Divider";
import { ThemeProvider } from "@mui/system";
import { useContext } from "react";
import ThemeContext from "../Contexts/themeContext";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Fade,
  Slide,
  Grow,
} from "@mui/material";

export default function Discord({ props }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        {props[0] === "noProjectsFound" ? (
          <div
            key={props[0]}
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: '"Kode Mono", monospace',
              }}
            >
              No Projects Found
            </Typography>
          </div>
        ) : props[0] === "noProjectSelected" ? (
          <div
            key={props[1]}
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <Slide
              direction="down"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography
                variant="h7"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: theme.palette.primary.textcolor,
                  fontFamily: '"Kode Mono", monospace',
                  padding: "10px",
                }}
              >
                Select a project to view its discord server
              </Typography>
            </Slide>
            <Divider
              sx={{
                backgroundColor: theme.palette.primary.ButtonColor,
                width: "100%",
                mb: 3,
              }}
            />
            {props && (
              <Grid container spacing={3} sx={{ p: 2 }}>
                {props[1].map((project) => (
                  <Grow in={true} timeout={1500}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card
                        sx={{
                          color: theme.palette.primary.textcolor,
                          backgroundColor: theme.palette.primary.main,
                          "&:hover": {
                            backgroundColor: theme.palette.primary.ButtonColor,
                            color: theme.palette.primary.whites,
                          },
                          boxShadow: theme.palette.primary.shadowGlow,
                          backdropFilter: "blur(2px)",
                          WebkitBackdropFilter: "blur(4px)",
                          WebkitBackdropFilter: "blur(16.3px)",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                        onClick={() => {
                          localStorage.setItem(
                            "discordServerId",
                            project.discordServerId
                          );
                        }}
                      >
                        <CardContent>
                          <Typography
                            style={{
                              fontSize: "16px",
                              fontFamily: '"Kode Mono", monospace',
                            }}
                          >
                            {project.projectName}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grow>
                ))}
              </Grid>
            )}
          </div>
        ) : (
          <div key={props[0]} style={{ height: "100%", width: "100%" }}>
            <iframe
              src={`https://e.widgetbot.io/channels/${props[0]}`}
              width="100%"
              height="100%"
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
