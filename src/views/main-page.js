import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GooglePlaceAutocompleteWrapper from '../components/GooglePlaceAutocompleteWrapper';
import HistoryResults from '../components/HistoryResults';
import { HISTORY_GET_RESULTS } from '../redux/actions';

class MainPage extends Component {
  render() {
    const getResults = this.props.getResults();
    return (
      <Container maxWidth="lg">
        <Box my={4}>
          <Header/>
          <GooglePlaceAutocompleteWrapper/>
          <HistoryResults getResults={getResults}/>
        </Box>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getResults: () => dispatch({ type: HISTORY_GET_RESULTS }),
});

export default connect(
  null,
  mapDispatchToProps
)(MainPage);