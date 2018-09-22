import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Emaillist from '../../emaillist/components/emaillist';
import EmailContent from '../../emaildetails/containers/email-content';
// import SelectedAnyMessage from '../../widgets/components/selected-any-message';
import './home.scss';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import { openDetails } from '../../actions/index';

class Home extends Component {
  // state = {
  //   visibility: false,
  // }

  // openDetails = (email) => {
  //   this.setState({
  //     visibility: true,
  //     email: email
  //   })
  // }
  handleOpenEmailContent = (emailId) => {
    this.props.dispatch(openDetails(emailId));
  }

  closeDetails = (event) => {
    this.setState({
      visibility: false,
    })
  }

  render() {
    return(
      <HomeLayout>
        <div className="List">
          <Emaillist 
          emaillist={this.props.emails}
          openDetails={this.handleOpenEmailContent}
          search={this.props.search}
          />
        </div>
        <div className="Details">
          {
            this.props.details.get('visibility') && //&& true // ?
            <EmailContent
              // handleClick={this.handleCloseEmailContent}
              // data={this.state.email}
              id={this.props.details.get('emailId')}
            />
          // :
          // <SelectedAnyMessage />
          }
        </div>
      </HomeLayout>
    )
  }
}

function mapStateToProps(state, props) {
  const emails = state.get('data').get('emails').map((emailId) => {
    return state.get('data').get('entities').get('emails').get(emailId);
  })


  let searchResults = list()
  const search = state.get('data').get('search');
  if(search) {
    const emailList = state.get('data').get('entities').get('emails');
    searchResults = emailList.filter((item) => (
      item.get('subject').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }
  return{
    emails: emails,
    search: searchResults,
    details: state.get('details'),
    // search: state.get('data').get('search')
  }
}

export default connect(mapStateToProps) (Home)
