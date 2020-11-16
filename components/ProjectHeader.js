import React from "react";
import PropTypes from "prop-types";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  featured: {
    position: "relative",
    color: "#c9c9c9",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: '50vh',
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: fade(theme.palette.common.white, 0.9),
  },
  featuredContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function ProjectHeader(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.featured}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {/* <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.featuredContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
            >
              {post.title}
            </Typography>
          </div>
        </Grid> */}
      {/* </Grid> */}
    </Paper>
  );
}

ProjectHeader.propTypes = {
  post: PropTypes.object,
};
