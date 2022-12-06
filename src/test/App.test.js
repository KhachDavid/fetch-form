import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, waitFor, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import LandingPage from "../pages/unauthenticated/LandingPage";

beforeEach(async () => {
  const initialState = {
    // add three different states here
    form: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      occupationName: "",
      stateName: "",
      occupationList: [],
      stateList: [],
    },
    language: {
      language: "english",
    },
    status: {
      isCreationSuccess: false,
      isCreationFailure: false,
      isFetchFailure: false,
      isWaiting: false,
    },
  };
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);
  await act(() => {
    render(
      <Provider store={store}>
        <LandingPage />
      </Provider>
    );
  });
});

test('Shows "Form Header"', async () => {
  await act(() =>
    waitFor(() => expect(screen.getByText("Fetch Rewards")).toBeInTheDocument())
  );
});

test('Shows "Sign Up"', async () => {
  await act(() =>
    waitFor(() => expect(screen.getByText("Sign Up")).toBeInTheDocument())
  );
});
