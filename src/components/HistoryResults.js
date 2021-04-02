import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

const HistoryResults = (props) => {
  const { results } = props;
  return(
    <Fragment>
      {results && results.length > 0 && 
        <Box my={8}>
          <h3>Your history results: </h3>
          {
            results.map((item, index) => 
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

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HistoryResults);