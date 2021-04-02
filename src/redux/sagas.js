import { all } from 'redux-saga/effects';
import history from './history/saga';

export default function* rootSaga() {
  yield all([
    history(),
  ]);
}