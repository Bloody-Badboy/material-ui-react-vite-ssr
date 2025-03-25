import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - MUI + VITE</title>
      </Helmet>
      <Typography variant="h1">This is the About Page</Typography>
    </>
  );
};

export default About;
