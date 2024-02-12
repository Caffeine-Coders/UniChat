import PrimarySearchAppBar from "@/Components/navBar/navBar";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";

const Discord = dynamic(
  () => {
    return import("@/Components/discord/discord.js");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <Box>
      <Box
        sx={{ maxWidth: "75%", marginLeft: 43, marginTop: 2 }}
      >
        <PrimarySearchAppBar />
      </Box>
      <Box
        sx={{ maxWidth: "75%", marginLeft: 43, marginTop: 2 }}
      >
        <Discord />
      </Box>
    </Box>
  );
}
