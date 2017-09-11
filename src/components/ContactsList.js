import React, {Component} from 'react';
import {Text} from 'react-native';
import Contact from './Contact'
import {deleteContact} from '../actions/companies'
import SwipeableDeleteList from './SwipeableDeleteList';

class ContactsList extends Component {
  renderContact = (data) => <Contact contact={data} />
  deleteContact = (id) => this.props.deleteContact(id)

    render(){
      return(
        <SwipeableDeleteList
          listViewData={this.props.company.contacts}
          renderRow={this.renderContact}
          deleteRow={this.deleteContact}
        />
      )
    }
}
