import React, {Component} from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

export default class LoginScreen extends Component{
  render(){
    return (
      <Container>
        <Header hasTabs />
        <Tabs initialPage={0}>
          <Tab heading="Login">
            <Content>
              <LoginForm />
            </Content>
          </Tab>
          <Tab heading="SignUp">
            <Content>
              <SignUpForm />
            </Content>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}
