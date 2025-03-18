import { Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - MUI + VITE</title>
      </Helmet>
      <Typography variant="h1">This is the Home Page</Typography>
    </>
  );
};

export default Home;
