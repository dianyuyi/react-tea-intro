import { makeStyles } from "@material-ui/core/styles";
import Entrance from "../assets/imgs/entrance.jpeg";
// import TeaField from "../assets/imgs/tea-field.jpeg";

export default makeStyles((theme) => ({
  root: {
    fontFamily: "Noto Serif TC, serif",
    height: "200vh",
    // backgroundImage: `url(${TeaField})`,
    // backgroundSize: "cover",
    paddingTop: "10rem",
  },
  box1: {
    width: "40%",
    height: 500,
    borderRadius: "1rem",
    backgroundColor: "#fff",
    marginLeft: "8rem",
    marginRight: "auto",
    backgroundImage: `url(${Entrance})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  box2: {
    width: "60%",
    height: "auto",
    borderRadius: "0",
    color: "#fff",
    fontSize: "1.25rem",
    padding: "0.5rem 2rem",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginLeft: "auto",
    // marginRight: "auto",
  },
  magic: {
    width: 200,
    height: 200,
    borderRadius: "1rem",
    backgroundColor: "#fff",
    marginTop: "10rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
