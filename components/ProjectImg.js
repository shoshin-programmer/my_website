import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
  },
});

export default function ProjectImg() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a
          href="https://inks-and-watercolor.vercel.app/"
          target="_blank"
          rel="noopener"
        >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            minHeight="440"
            width="auto"
            image="/showcase.png"
            title="Contemplative Reptile"
          />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Commission Art Portfolio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Design, develop, and deployed using React with NextJS.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
