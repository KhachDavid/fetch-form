import { isBrowser } from "react-device-detect";
import React, { Suspense } from "react";
import "./styles/App.scss";
import Loading from "./components/Loading";

// Lazy load the pages
import Landing from "./pages/unauthenticated/Landing";

class App extends React.Component {
  render() {
    return (
      <div className={isBrowser ? "App" : "App-mobile"}>
        <Suspense fallback={<Loading />}>
          <div className="body-content" key="body-content">
            <Landing />
          </div>
        </Suspense>
      </div>
    );
  }
}

export default App;
