import React, { Component } from 'react';
import {Form, Input, Label, Item, Button} from 'native-base';
import {Text, AsyncStorage} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData, createNewUser, setStorage } from '../actions/users.js'
import axios from 'axios'

class NewCompanyForm extends Component{
  state = {
    companyName: ''
  }
  render(){
    return(
      <Input autoCapitalize="none" onChangeText={(text)=> this.setState({ companyName: text})} value={this.state.companyName}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ makeNewCompany }, dispatch)
}

export default connect(null, mapDispatchToProps)(CompaniesList);
