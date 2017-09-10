import React, { Component } from 'react';
import {Form, Input, Label, Item, Button} from 'native-base';
import {Text, AsyncStorage, View} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { makeNewCompany } from '../actions/companies.js'
import axios from 'axios'

class NewCompanyForm extends Component{
  state = {
    companyName: ''
  }

  newBtnPressed = () => {
    AsyncStorage.getItem('jwt')
    .then((jwt) => {
      let dataObj = {
        companyName: this.state.companyName,
        jwt: jwt
      }
      this.props.makeNewCompany(dataObj)
    })
  }

  render(){
    console.log("PROPS", this.props)
    return(
      <View>
        <Input autoCapitalize="none" onChangeText={(text)=> this.setState({ companyName: text})} value={this.state.companyName}/>
        <Button small primary onPress={this.newBtnPressed}>
          <Text>New Company</Text>
        </Button>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ makeNewCompany }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewCompanyForm);
