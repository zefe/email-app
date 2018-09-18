import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit');
    this.props.dispatch({
      type: 'SEARCH_EMAIL',
      payload: {
        query: this.input.value,
      }
    })
  }

  setInputRef = element => {
    this.input = element;
  }
  render() {
    return(
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default connect() (SearchContainer);
