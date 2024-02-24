import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  classifyUser,
  getLoggedInUserDetails,
} from "../../Services/authentication";
import { Box, CircularProgress } from "@mui/material";

function RouteProtection({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const userDetails = await getLoggedInUserDetails();
      if (!userDetails) {
        router.push("/login");
      } else {
        const classifiedUser = await classifyUser(userDetails.email);
        if (classifiedUser.type === "Unregistered") {
          router.push("/login");
        } else if (classifiedUser.type === "Registered") {
          setLoading(false);
        }
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{
          backgroundImage:
            "linear-gradient(145deg, hsl(0deg 0% 0%) 0%, hsl(270deg 75% 3%) 40%, hsl(271deg 74% 6%) 62%, hsl(270deg 71% 9%) 72%, hsl(270deg 72% 13%) 79%, hsl(269deg 72% 15%) 84%, hsl(270deg 73% 19%) 89%, hsl(269deg 71% 22%) 93%, hsl(270deg 72% 25%) 96%, hsl(270deg 72% 28%) 100%)",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return children;
}

export default RouteProtection;
