import { Route, Switch, BrowserRouter } from "react-router-dom";
import { paths } from "./constants/paths";
import { isBrowser } from "react-device-detect";
import React, { Suspense, lazy } from "react";
import "./styles/App.scss";
import Loading from "./components/Loading";

type Props = {
  isAuthenticated: boolean,
};

// Lazy load the pages
const [
  Landing,
  ErrorPage,
] = [
  import("./pages/unauthenticated/Landing"),
  import("./pages/unauthenticated/ErrorPage"),
].map((component) => lazy(() => component));

class App extends React.Component<Props> {
  getRoutes = () => {
    const defaultRoutes = [
      <Route key={paths.landing} path={paths.landing} component={Landing} />,
    ];

    const errorRoutes = [
      <Route key={paths.error} component={ErrorPage} />,
    ];

    const routes = [
      ...defaultRoutes,
      ...errorRoutes,
    ];

    return routes;
  };

  render() {
    return (
      <div className={isBrowser ? "App" : "App-mobile"}>
        <Suspense fallback={<Loading/>}>
          <BrowserRouter>
            <div className="body-content" key="body-content">
              <Switch>{this.getRoutes()}</Switch>
            </div>
          </BrowserRouter>
        </Suspense>
      </div>
    );
  }
}

export default App;