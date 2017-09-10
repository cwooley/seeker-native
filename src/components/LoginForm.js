import React, { Component } from 'react';
import {Form, Input, Label, Item, Button, Spinner} from 'native-base';
import {Text, AsyncStorage} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData, createNewUser, setStorage } from '../actions/users.js'
import axios from 'axios'


class LoginForm extends Component{

  state={
    username: '',
    password: '',
    loading: false
  }

  loginPressed = () => {
    var FormData = require('form-data');
    var form = new FormData();
    form.append('username', this.state.username)
    form.append('password', this.state.password)
    this.setState({loading: true})
    // Yo Dawg I heard you like Async
    let request = axios({
    	method: 'post',
    	url: 'http://localhost:3000/api/v1/login',
    	data: form
    }).then(data => AsyncStorage.setItem('jwt', data.data[0].jwt)
      .then((storage) => AsyncStorage.getItem('jwt')
      .then((jwt) => this.props.fetchUserData(jwt) )))
  }

  render(){
    return(
      <Form>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input autoCapitalize="none" onChangeText={(text)=> this.setState({ username: text})} value={this.state.username}/>
        </Item>
        <Item stackedLabel last>
          <Label>Password</Label>
          <Input secureTextEntry={true} onChangeText={(text)=> this.setState({ password: text})} value={this.state.password}/>
        </Item>
        <Button block info onPress={this.loginPressed}>
          <Text>Log In</Text>
        </Button>
        {this.state.loading && <Spinner color='blue' />}
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchJWT, fetchUserData, createNewUser, setStorage }, dispatch)
}

function mapStateToProps(state){
  return {loginFail: state.user.loginFail}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
