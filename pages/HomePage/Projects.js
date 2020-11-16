import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Featured from "../../components/Featured";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    background: "url('/project_bg.jpg')",
    backgroundBlendMode: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "none",
  },
  darkOverlay: {
    paddingTop: 65,
    background: fade(theme.palette.common.black, 0.7),
    height: "100%",
  },
  title: {
    color: "#ccc",
    padding: theme.spacing(2),
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: '1px',
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
            Designing from your ideas and personality into a website.
          </div>
          <div className={classes.featureContainer}>
            <Featured post={content} />
          </div>
        </Container>
      </div>
    </div>
  );
}