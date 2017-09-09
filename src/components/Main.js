import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { Container, Header, Content } from 'native-base';
import {AsyncStorage} from 'react-native'


class Main extends Component{

  componentWillMount(){


  }

  myShittyNavSystem = () =>{
    //SWITCH TO CHECK FOR USER ALSO NEED TO CONNECT THIS TO STORE
  AsyncStorage.getItem('jwt')
  .then(token =>{
    if (token){
      console.log("We have token rendering CompaniesList")
      return <CompaniesList />
    }
    console.log("No token rendering LoginForm")
    return <LoginForm />
  })
  }

  render () {
    return (
      <Container>
        <Header />
        <Content>
          <LoginForm />
        </Content>
      </Container>
    )

  }
}

export default Main
