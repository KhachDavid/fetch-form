import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
const axios = require('axios');

jest.mock('axios');

test("renders learn react link", () => {
  const store = configureStore();

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return true;
});
