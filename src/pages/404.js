/**@jsx jsx */
import { Link } from "gatsby";
import { jsx, Grid, Heading, Themed } from "theme-ui";

const NotFoundPage = () => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Heading>404</Heading>
      <Themed.a as={Link} to="/">
        BACK
      </Themed.a>
    </Grid>
  );
};

export default NotFoundPage;
