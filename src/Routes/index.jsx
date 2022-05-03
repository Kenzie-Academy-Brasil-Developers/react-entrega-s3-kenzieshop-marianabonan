import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Carrinho from "../pages/carrinho";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/Carrinho">
        <Carrinho />
      </Route>
    </Switch>
  );
};

export default Routes;
