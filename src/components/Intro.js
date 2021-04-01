import React from "react";
import useStyles from "../styles/intro";
import ImageCard from "./ImageCard";
import teaTypes from "../data/data";
import useWindowPosition from "../hook/useWindowPosition";

const Intro = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard teaType={teaTypes[0]} checked={checked} />
      <ImageCard teaType={teaTypes[1]} checked={checked} />
      <ImageCard teaType={teaTypes[2]} checked={checked} />
      <ImageCard teaType={teaTypes[3]} checked={checked} />
    </div>
  );
};

export default Intro;
