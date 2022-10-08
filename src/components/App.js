import React from "react";
import {
  Routes as Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "./Home";
import DynamicPage from "./DynamicPage";
import NoMatch from "./NoMatch";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/dynamic" element={<DynamicPage />} />
          <Route element={<NoMatch />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
