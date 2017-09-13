import React, {Component} from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

export default class LoginScreen extends Component{
  render(){
    return (
      <Container style={styles.containerStyle}>
        <Header hasTabs />
        <Tabs initialPage={0}>
          <Tab heading="Login">
            <Content style={styles.contentStyle} >
              <LoginForm />
            </Content>
          </Tab>
          <Tab heading="SignUp">
            <Content style={styles.contentStyle} >
              <SignUpForm />
            </Content>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#ffffff',
  },
  contentStyle: {
    margin: 10,
    padding: 10
  }
}
