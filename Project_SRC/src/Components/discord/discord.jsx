import { Typography } from "@mui/material";

export default function Discord({ props }) {
  return (
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
  );
}
