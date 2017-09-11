import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, Input, Label, Item, Button, Spinner, Container, Header, Content} from 'native-base';
import { Text } from 'react-native';

class SignUpForm extends Component{
  state={
    username: '',
    password: '',
    loading: false,
    email: '',
    profile_image_url: ''
  }

  signUpPressed = () => {
    console.log(this.state)
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
          <Text>Log In</Text>
        </Button>
        {this.state.loading && <Spinner color='blue' />}
      </Form>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchJWT, fetchUserData, createNewUser, setStorage }, dispatch)
// }

function mapStateToProps(state){
  return {loginFail: state.user.loginFail}
}

export default connect(mapStateToProps)(SignUpForm);
