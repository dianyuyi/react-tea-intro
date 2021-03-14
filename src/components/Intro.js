import React from "react";
import useStyles from "../styles/intro";
import ImageCard from "./ImageCard";
import places from "../data/data";
import useWindowPosition from "../hook/useWindowPosition";

const Intro = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />
    </div>
  );
};

export default Intro;
