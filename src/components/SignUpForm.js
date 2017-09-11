import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, Input, Label, Item, Button, Spinner, Container, Header, Content} from 'native-base';
import { Text, AsyncStorage, Picker } from 'react-native';
import { createNewUser, fetchUserData } from '../actions/users.js'
import axios from 'axios'


class SignUpForm extends Component{
  state={
    username: '',
    password: '',
    loading: false,
    email: '',
    profile_image_url: '',
    dailyGoal: 5
  }

  signUpPressed = () => {
    this.setState({loading: true})
    this.props.createNewUser(this.state)


    var FormData = require('form-data');
    var form = new FormData();
    form.append('user[username]', this.state.username)
    form.append('user[password]', this.state.password)
    form.append('user[email]', this.state.email)
    form.append('user[profile_image_url]', this.state.profile_image_url)
    form.append('user[app_goal]', this.state.dailyGoal)
    let request = axios({
      method: 'post',
      url: 'https://seeker-api.herokuapp.com/api/v1/users',
      data: form
    })
    .then(data => AsyncStorage.setItem('jwt', data.data[0].jwt)
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
        <Item stackedLabel last>
          <Label>Email</Label>
          <Input autoCapitalize="none" onChangeText={(text)=> this.setState({ email: text})} value={this.state.email}/>
        </Item>
        <Item stackedLabel last>
          <Label>Profile Image Url</Label>
          <Input autoCapitalize="none" onChangeText={(text)=> this.setState({ profile_image_url: text})} value={this.state.profile_image_url}/>
        </Item>
        <Button block info onPress={this.signUpPressed}>
          <Text>Sign Up</Text>
        </Button>
        {this.state.loading && <Spinner color='blue' />}
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createNewUser, fetchUserData }, dispatch)
}

function mapStateToProps(state){
  return {loginFail: state.user.loginFail}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
