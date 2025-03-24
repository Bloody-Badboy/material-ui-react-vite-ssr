import { Link, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - MUI + VITE</title>
      </Helmet>
      <Typography variant="h1">This is the Home Page</Typography>
      <Stack>
        <Link component={RouterLink} to={"/about"}>
          ABOUT
        </Link>
        <Link component={RouterLink} to={"/todos"}>
          TODOS
        </Link>
      </Stack>
    </>
  );
};

export default Home;
