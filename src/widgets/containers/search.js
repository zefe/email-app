import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { bindActionCreators } from '../../../../../Users/usuario/AppData/Local/Microsoft/TypeScript/3.0/node_modules/redux';

class SearchContainer extends Component {
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit');
    this.props.actions.searchAsyncEmail(this.input.value)
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

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps) (SearchContainer);
