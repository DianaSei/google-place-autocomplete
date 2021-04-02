import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { HISTORY_GET_RESULTS } from "../redux/actions";

const HistoryResults = (history) => {

  useEffect(() => {
    history.getHistory();
  }, [])
  
  return(
    <Fragment>
      {history.results && history.results.length > 0 && 
        <Box my={8}>
          <h3>Your history results: </h3>
          {
            history.results.map((item, index) => 
              <p key={index}>{index + 1}. {item}</p>
            )
          }
        </Box>
      }
    </Fragment>
  )
}

const mapStateToProps = ({ history }) => {
  const { results } = history;
  return { results };
};

const mapDispatchToProps = (dispatch) => ({
  getHistory: () => dispatch({ type: HISTORY_GET_RESULTS }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryResults);