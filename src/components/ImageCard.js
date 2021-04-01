import React from "react";
import useStyles from "../styles/imageCard";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const ImageCard = ({ teaType, checked }) => {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={teaType.imageUrl}
          title={teaType.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {teaType.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {teaType.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
};

export default ImageCard;
