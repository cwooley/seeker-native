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
      this.setState({companyName: ''})
    })
  }

  render(){
    return(
      <View>
        <Input style={styles.inputStyle} autoCapitalize="none" onChangeText={(text)=> this.setState({ companyName: text})} value={this.state.companyName}/>
        <Button style={{alignSelf: 'center'}} small primary onPress={this.newBtnPressed}>
          <Text>New Company</Text>
        </Button>
      </View>
    )
  }
}

const styles = {
    inputStyle: {
      color: '#000',
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#48BBEC',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 20,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ makeNewCompany }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewCompanyForm);
