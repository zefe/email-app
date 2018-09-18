import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Emaillist from '../../emaillist/components/emaillist';
import EmailDetails from '../../emaildetails/containers/email-details';
import EmailContent from '../../emaildetails/components/email-content';
// import SelectedAnyMessage from '../../widgets/components/selected-any-message';
import './home.scss';
import { connect } from 'react-redux';
import { List as list } from 'immutable';

class Home extends Component {
  state = {
    emailDetailsVisible: false,
  }

  handleOpenEmailContent = (email) => {
    this.setState({
      emailDetailsVisible: true,
      email: email
    })
  }

  handleCloseEmailContent = (event) => {
    this.setState({
      emailDetailsVisible: false,
    })
  }

  render() {
    return(
      <HomeLayout>
        <div className="List">
          <Emaillist 
          emaillist={this.props.inbox}
          handleOpenEmailContent={this.handleOpenEmailContent}
          search={this.props.search}
          />
        </div>
        <div className="Details">
          {
            this.state.emailDetailsVisible && //&& true // ?
          <EmailDetails>
            <EmailContent
              handleClick={this.handleCloseEmailContent}
              data={this.state.email}
            />

          </EmailDetails>
          // :
          // <SelectedAnyMessage />
          }
        </div>
      </HomeLayout>
    )
  }
}

function mapStateToProps(state, props) {
  const inbox = state.get('data').get('inbox').map((inboxId) => {
    return state.get('data').get('entities').get('inbox').get(inboxId);
  })
  let searchResults = list()
  const search = state.get('data').get('search');
  if(search) {
    const emailList = state.get('data').get('entities').get('inbox');
    searchResults = emailList.filter((item) => (
      item.get('subject').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }
  return{
    inbox: inbox,
    search: searchResults
    // search: state.get('data').get('search')
  }
}

export default connect(mapStateToProps) (Home)
