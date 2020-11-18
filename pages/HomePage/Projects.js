import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Featured from "../../components/Featured";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    width: "100vw",
    background: "url('/backgrounds/project_bg.jpg')",
    backgroundBlendMode: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "none",
  },
  darkOverlay: {
    paddingTop: 65,
    background: fade(theme.palette.common.black, 0.7),
    minHeight: "100vh",
  },
  title: {
    color: "#ccc",
    padding: theme.spacing(2),
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: "1px",
    [theme.breakpoints.up("md")]: {
      fontSize: 60,
      marginTop: 20,
      padding: theme.spacing(4),
    },
  },
  featureContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));
const content = {
  title: "Inks and Watercolor - Portfolio",
  image: "/showcase.png",
};

export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.darkOverlay}>
        <Container maxWidth="lg" disableGutters={true}>
          <div className={classes.title}>
            <Fade bottom cascade>
              Designing from your ideas and personality into a website.
            </Fade>
          </div>
          <div className={classes.featureContainer}>
            <Fade bottom>
              <Featured post={content} />
            </Fade>
          </div>
        </Container>
      </div>
    </div>
  );
}
