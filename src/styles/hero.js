import { makeStyles } from "@material-ui/core/styles";
import Bg from "../assets/imgs/bg.jpg";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "calc(100vh - 60px)",
    height: "100vh",
    fontFamily: "Noto Serif TC,  serif",
    zIndex: 2,
    backgroundImage: `url(${Bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 0,
      background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.3) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)",
    },
  },
  colorText: {
    color: "#06a05d",
    textShadow: "2px 2px 0px rgb(0 0 0 / 50%)",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#fff",
    fontSize: "4rem",
  },
}));
