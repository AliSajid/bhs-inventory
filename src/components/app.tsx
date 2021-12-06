import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import Home from "../routes/home";
import Inventory from "../routes/inventory";
import Trends from "../routes/trends";
import SignIn from "../routes/signin";
import NotFoundPage from "../routes/notfound";
import Header from "./header";
import Footer from "./footer";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root" className="h-screen flex flex-col">
      <Header />
      <div id="main" className="flex-1 overflow-y-auto">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/inventory/" component={Inventory} />
          <Route path="/trends/" component={Trends} />
          <Route path="/signin/" component={SignIn} />
          <NotFoundPage default />
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
