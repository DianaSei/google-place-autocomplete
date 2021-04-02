import {
  HISTORY_GET_RESULTS,
  HISTORY_GET_RESULTS_SUCCESS,
  HISTORY_GET_RESULTS_ERROR,
  CREATE_HISTORY_RECORD,
  CREATE_HISTORY_RECORD_SUCCESS,
  CREATE_HISTORY_RECORD_ERROR
} from '../actions';


export const getHistoryResults = () => ({
  type: HISTORY_GET_RESULTS
});

export const getHistoryResultsSuccess = (items) => ({
  type: HISTORY_GET_RESULTS_SUCCESS,
  payload: items
});

export const getHistoryResultsError = (error) => ({
  type: HISTORY_GET_RESULTS_ERROR,
  payload: error
});

export const createHistoryRecord = () => ({
  type: CREATE_HISTORY_RECORD
});

export const createHistoryRecordSuccess = (item) => ({
  type: CREATE_HISTORY_RECORD_SUCCESS,
  payload: item
});

export const createHistoryRecordError = (error) => ({
  type: CREATE_HISTORY_RECORD_ERROR,
  payload: error
});