import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import WorkTabs from "../../components/WorkTabs.js";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    width: "100vw",
    background: "url('/backgrounds/work_bg.jpg')",
    backgroundBlendMode: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    overflow: "hidden",
  },
  darkOverlay: {
    paddingTop: 65,
    background: fade(theme.palette.common.black, 0.7),
    minHeight: "100vh",
  },
  titleContainer: {
    padding: theme.spacing(2),
    color: "#CCCCCC",
    fontSize: 30,
    fontWeight: "bolder",
    [theme.breakpoints.up("md")]: {
      fontSize: 60,
      padding: theme.spacing(4),
    },
  },
}));

export default function WorkSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.darkOverlay}>
          <Container maxWidth="lg" disableGutters={true}>
            <Fade bottom>
              <div className={classes.titleContainer}>Experiences</div>
            </Fade>
            <Fade bottom>
              <WorkTabs />
            </Fade>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}
