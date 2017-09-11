import React, {Component} from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contact from './Contact'
import {deleteContact} from '../actions/companies'
import SwipeableLeftDeleteList from './SwipeableLeftDeleteList';

class ContactsList extends Component {
  renderContact = (data) => <Contact contact={data} />
  deleteContact = (id) => this.props.deleteContact(id)

    render(){
      return(
        <SwipeableLeftDeleteList
          listViewData={this.props.company.contacts}
          renderRow={this.renderContact}
          deleteRow={this.deleteContact}
        />
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteContact }, dispatch)
}


export default connect(null, mapDispatchToProps)(ContactsList);
