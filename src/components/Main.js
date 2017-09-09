import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { Container, Header, Content } from 'native-base';


class Main extends Component{
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
