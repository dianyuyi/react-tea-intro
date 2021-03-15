import React from "react";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { Parallax, Background } from "react-parallax";
import { useInView } from "react-intersection-observer";
import useStyles from "../styles/about";
import TeaField from "../assets/imgs/tea-field.jpeg";

const About = () => {
  const classes = useStyles();

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 200], [0, 200]);
  const y2 = useTransform(scrollY, [0, 200], [0, -50]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <Parallax bgImage={TeaField} strength={-200} className={classes.root}>
      {/* <div className={classes.root}> */}
      <motion.div className={classes.box1} style={{ y: y1, x: -50 }} />
      <motion.div className={classes.box2} style={{ y: y2, x: 0 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat alias
        dolore autem necessitatibus, dicta numquam eos consectetur aliquam.
        Quidem, facere minus. Accusantium modi fuga commodi, eligendi enim
        maxime neque delectus.
      </motion.div>
      {/* <div style={{ height: 500 }} /> */}
      {/* <div style={{ position: "fixed", top: 0, left: 0 }}>
        {" "}
        {"is in view? " + inView}
      </div> */}
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
        className={classes.magic}
      >
        test div
      </motion.div>
      {/* </div> */}
    </Parallax>
  );
};

export default About;
