import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
	HISTORY_GET_RESULTS,
  CREATE_HISTORY_RECORD
} from '../actions';

import {
	getHistoryResultsSuccess,
	getHistoryResultsError,
	createHistoryRecordSuccess,
	createHistoryRecordError,
} from './actions';

const getHistoryResultsRequest = async () => {
  return await new Promise((success, fail) => {
    setTimeout(() => {
      success([]);
    }, 1000);
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
}

const createHistoryRecordRequest = async (payload) => {
  return await new Promise((success, fail) => {
    success(payload);
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
}

function* getHistoryResults() {
	try {
		const response = yield call(getHistoryResultsRequest);
		yield put(getHistoryResultsSuccess(response));
	} catch (error) {
		yield put(getHistoryResultsError(error));
	}
}

function* createHistoryRecord({ payload }) {
  try {
    const newRecord = yield call(createHistoryRecordRequest, payload);
    yield put(createHistoryRecordSuccess(newRecord))
  } catch (error){
    yield put(createHistoryRecordError(error));
  }
}

export function* watchGetHistoryResults() {
	yield takeEvery(HISTORY_GET_RESULTS, getHistoryResults);
}

export function* watchCreateHistoryRecord() {
	yield takeEvery(CREATE_HISTORY_RECORD, createHistoryRecord);
}

export default function* rootSaga() {
	yield all([
		fork(watchGetHistoryResults),
		fork(watchCreateHistoryRecord),
	]);
}