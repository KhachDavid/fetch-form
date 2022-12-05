import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./store/reducers";
import rootSaga from "./store/sagas";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer, applyMiddleware(sagaMiddleware)];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers,
  );

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./store/reducers", () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
