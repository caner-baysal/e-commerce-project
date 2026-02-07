import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Hompeage";

function PageContent() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default PageContent;