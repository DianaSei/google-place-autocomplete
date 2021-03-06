import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { CREATE_HISTORY_RECORD } from '../redux/actions';
import Button from '@material-ui/core/Button';

const GooglePlaceAutocompleteWrapper = (history) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  let autoComplete;
  
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);
    
  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
  
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  
  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }
  
  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    history.createRecord(query);
  }

  function clearQuery(){
    setQuery("");
  }
    
  return (
    <Box my={5}>
      <div className="search-location-wrapper">
        <img src="/images/location-pin.png" width="30" alt="Location pin icon" className="search-location-icon"/>
        <input
          ref={autoCompleteRef}
          className="search-location-input"
          onChange={event => {setQuery(event.target.value)}}
          placeholder="Enter a location"
          value={query}
        />
        <Button variant="contained" color="primary" onClick={clearQuery}>Clear</Button>
      </div>
    </Box>
  );
}

const mapStateToProps = ({ history }) => {
  const { results } = history;
  return { results };
};

const mapDispatchToProps = (dispatch) => ({
  createRecord: (location) => dispatch({ type: CREATE_HISTORY_RECORD, payload: location }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GooglePlaceAutocompleteWrapper);