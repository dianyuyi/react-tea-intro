import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useStyles from "./styles/index";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
