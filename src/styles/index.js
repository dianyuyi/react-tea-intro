import { makeStyles } from "@material-ui/core/styles";
import Bg from "../assets/imgs/bg.jpg";

export default makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // backgroundImage: `url(${Bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    "&::before": {
      // content: '""',
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
}));
