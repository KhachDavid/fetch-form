import { Route, Switch, BrowserRouter } from "react-router-dom";
import { paths } from "./constants/paths";
import { isBrowser } from "react-device-detect";
import React, { Suspense, lazy } from "react";
import "./styles/App.scss";
import Loading from "./components/Loading";

// Lazy load the pages
const [Landing, ErrorPage] = [
  import("./pages/unauthenticated/Landing"),
  import("./pages/unauthenticated/ErrorPage"),
].map((component) => lazy(() => component));

class App extends React.Component {
  render() {
    return (
      <div className={isBrowser ? "App" : "App-mobile"}>
        <Suspense fallback={<Loading />}>
          <div className="body-content" key="body-content">
            <BrowserRouter>
              <Switch>
                <Route
                  key={paths.landing}
                  path={paths.landing}
                  component={Landing}
                />

                <Route
                  key={paths.error}
                  path={paths.error}
                  component={ErrorPage}
                />
              </Switch>
            </BrowserRouter>
          </div>
        </Suspense>
      </div>
    );
  }
}

export default App;
