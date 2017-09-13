import React, { Component } from 'react';
import {Form, Input, Label, Item, Button, Spinner, Container, Header, Content} from 'native-base';
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
    //Handle Errors in this process and give some user feedback !
    // I KNOW YOUR READING THIS!!!
    var FormData = require('form-data');
    var form = new FormData();
    form.append('username', this.state.username)
    form.append('password', this.state.password)
    this.setState({loading: true})
    // Yo Dawg I heard you like Async
    let request = axios({
    	method: 'post',
    	url: 'https://seeker-api.herokuapp.com/api/v1/login',
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
              <Input style={styles.inputStyle} autoCapitalize="none" onChangeText={(text)=> this.setState({ username: text})} value={this.state.username}/>
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input style={styles.inputStyle} secureTextEntry={true} onChangeText={(text)=> this.setState({ password: text})} value={this.state.password}/>
            </Item>
            <Button block info onPress={this.loginPressed}>
              <Text>Log In</Text>
            </Button>
            {this.state.loading && <Spinner color='green' />}
          </Form>
    )
  }
}

const styles = {

  inputStyle: {
    width: '95%',
    paddingLeft: 0,
    paddingRight: 0,
    alignSelf: 'center',
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchJWT, fetchUserData, createNewUser, setStorage }, dispatch)
}

function mapStateToProps(state){
  return {loginFail: state.user.loginFail}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
