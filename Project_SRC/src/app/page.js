import PrimarySearchAppBar from "@/Components/navBar/navBar";
import Box from "@mui/material/Box";
import Discord from "@/Components/discord/discord";

export default function Home() {
  return (
    <Box>
      <Box sx={{ maxWidth: "75%", marginLeft: 43, marginTop: 2 }}>
        <PrimarySearchAppBar />
      </Box>
      <Box sx={{ maxWidth: "75%", marginLeft: 43, marginTop: 2, marginBottom: 2 }}>
        <Discord />
      </Box>
    </Box>
  );
}
