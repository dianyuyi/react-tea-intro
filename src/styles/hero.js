import { makeStyles } from "@material-ui/core/styles";
import Bg from "../assets/imgs/bg.jpg";

export default makeStyles((theme) => ({
  // root: {
  //   minHeight: "100vh",
  //   backgroundImage: `url(${Bg})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  // },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 60px)",
    fontFamily: "Noto Serif TC,  serif",
    zIndex: 2,
    // backgroundImage: `url(${Bg})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#06a05d",
    textShadow: "2px 2px 2px rgb(255 255 255 / 50%)",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#06a05d",
    fontSize: "4rem",
  },
}));
