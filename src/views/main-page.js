import React, { Component } from 'react';
import Header from '../components/Header';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GooglePlaceAutocompleteWrapper from '../components/GooglePlaceAutocompleteWrapper';
import HistoryResults from '../components/HistoryResults';

class MainPage extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Box my={4}>
          <Header/>
          <GooglePlaceAutocompleteWrapper/>
          <HistoryResults/>
        </Box>
      </Container>
    )
  }
}

export default MainPage;