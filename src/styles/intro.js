import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    // },
  },
}));
