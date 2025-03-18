import { Button, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import theme from "../theme";

interface Props {
  fillViewport?: boolean;
}

export default function NotFound({ fillViewport = false }: Props) {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: fillViewport ? "100vh" : "100%", userSelect: "none" }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{ color: theme.palette.primary["main"], fontWeight: "bold" }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase" }}
          align="center"
        >
          Oops! Nothing was found
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ textTransform: "uppercase", mt: 4, mb: 4 }}
          align="center"
        >
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button component={Link} to="/" variant="text" replace>
          Return to home
        </Button>
      </Stack>
    </>
  );
}
