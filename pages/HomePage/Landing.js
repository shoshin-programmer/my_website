import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    minHeight: "100vh",
    width: "100vw",
    background: "url('/landing.jpg')",
    backgroundBlendMode: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "none",
  },
  darkOverlay: {
    paddingTop: 65,
    background: fade(theme.palette.common.black, 0.7),
    minHeight: "100vh",
  },
  landingText: {
    color: "#ccc",
    padding: theme.spacing(2),
    fontSize: 45,
    fontWeight: "bold",
    marginTop: '20%',
    [theme.breakpoints.up("md")]: {
      fontSize: 90,
      marginTop: 20,
      padding: theme.spacing(4),
    },
  },
  landingSecondary: {
    color: "#c9c9c9",
    fontWeight: "lighter",
    letterSpacing: "1px",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(7),
    fontSize: 30,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.landingContainer}>
      <div className={classes.darkOverlay}>
        <Container maxWidth="lg" disableGutters={true}>
          <div className={classes.landingText}>
            I AM
            <br />
            MARK ATIENZA,
            <br />A FULLSTACK
            <br />
            WEB DEVELOPER
          </div>
          <div className={classes.landingSecondary}>
            from plans
            <br />
            to designs
            <br />
            to products
          </div>
        </Container>
      </div>
    </div>
  );
}
