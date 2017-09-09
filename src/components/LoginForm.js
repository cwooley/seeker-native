import React, { Component } from 'react';
import {Form, Input, Label, Item, Button} from 'native-base';
import {Text} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData, createNewUser } from '../actions/users.js'


class LoginForm extends Component{

  state={
    username: '',
    password: ''
  }

  render(){
    return(
      <Form>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input onChangeText={(text)=> this.setState({ username: text})} value={this.state.username}/>
        </Item>
        <Item stackedLabel last>
          <Label>Password</Label>
          <Input onChangeText={(text)=> this.setState({ password: text})} value={this.state.password}/>
        </Item>
        <Button block info onPress={() => this.props.fetchJWT(this.state)}>
          <Text>Log In</Text>
        </Button>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchJWT, fetchUserData, createNewUser }, dispatch)
}

function mapStateToProps(state){
  return {loginFail: state.user.loginFail}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
