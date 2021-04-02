import {
  HISTORY_GET_RESULTS, 
  HISTORY_GET_RESULTS_SUCCESS, 
  HISTORY_GET_RESULTS_ERROR,
  CREATE_HISTORY_RECORD, 
  CREATE_HISTORY_RECORD_SUCCESS, 
  CREATE_HISTORY_RECORD_ERROR,
} from '../actions';

const INIT_STATE = {
  results: null,
};

const reducer = (state = INIT_STATE, {type, payload}) => {
  switch (type) {
    case HISTORY_GET_RESULTS:
      return { ...state};
    case HISTORY_GET_RESULTS_SUCCESS:
      return { ...state, results: payload };
    case HISTORY_GET_RESULTS_ERROR:
      return { ...state};
    case CREATE_HISTORY_RECORD:
      return { ...state};
    case CREATE_HISTORY_RECORD_SUCCESS:
      return { ...state, results: [...state.results, payload] };
    case CREATE_HISTORY_RECORD_ERROR:
      return { ...state};

    default: return { ...state };
  }
};

export default reducer;
