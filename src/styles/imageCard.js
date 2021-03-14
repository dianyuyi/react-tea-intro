import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    maxWidth: "100%",
    height: 300,
  },
  title: {
    fontFamily: "Noto Serif TC, serif",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Noto Serif TC, serif",
    fontSize: "1.1rem",
    color: "#ddd",
  },
}));
