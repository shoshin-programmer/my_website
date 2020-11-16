import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
    background: "#1A1921",
    color: "#cccccc",
    marginTop: 60,
  },
  media: {
    height: 300,
    [theme.breakpoints.up("md")]: {
      height: 450,
      width: 1000,
    },
  },
}));

export default function Featured() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a
          href="http://inks-and-watercolor.vercel.app/"
          target="_blank"
          rel="noopener"
        >
          <CardMedia
            className={classes.media}
            image="/showcase.png"
            title="inks and watercolors"
          />
        </a>
      </CardActionArea>
    </Card>
  );
}
