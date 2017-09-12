import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contact from './Contact'
import {deleteContact} from '../actions/companies'
import SwipeableDeleteList from './SwipeableDeleteList';
import { Button } from 'native-base'

class ContactsList extends Component {
  renderContact = (data) => <Contact contact={data} />
  deleteContact = (id) => this.props.deleteContact(id)

    render(){
      console.log('CONTACTS LIST PROPS',this.props)
      return(
        <View>
          <Button block info onPress={() => this.props.navigation.navigate('NewContactForm', this.props.company)}><Text>New Contact</Text></Button>
          <SwipeableDeleteList
            listViewData={this.props.company.contacts}
            renderRow={this.renderContact}
            deleteRow={this.deleteContact}
          />
        </View>

      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteContact }, dispatch)
}


export default connect(null, mapDispatchToProps)(ContactsList);
