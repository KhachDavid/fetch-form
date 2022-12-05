import { all, call, spawn } from 'redux-saga/effects';
import formSaga from './form.saga';

function errorHandler(error) {
  console.log(error);
}

const spawnSagasList = (sagasList) =>
  sagasList.map(({ saga, errorHandler }) =>
    spawn(function* s() {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          yield* errorHandler(e);
        }
      }
    })
  );

export default function* rootSaga() {
  const sagaList = [
    {
      saga: formSaga,
      errorHandler: errorHandler,
    },
  ];

  yield all(spawnSagasList(sagaList));
}
