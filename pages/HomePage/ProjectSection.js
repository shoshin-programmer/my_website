import React from "react";
import ProjectImg from "../../components/ProjectImg.js";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    width: "100vw",
    background: "url('/2nd.jpg')",
    backgroundBlendMode: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "none",
  },
  content: {
    padding: theme.spacing(7),
    background: fade(theme.palette.common.white, 0.7),
    height: "100%",
    color: "#000000",
  },
  titleContainer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    color: "#404040",
    fontSize: 100,
    fontWeight: "lighter",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    paddingTop: 50,
  },
  imgShot: {
    width: "1000px",
  },
}));

export default function ProjectSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.titleContainer}>LATEST WORK</div>
          <div className={classes.imgContainer}>
            <ProjectImg />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
