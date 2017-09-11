import React, {Component} from 'react';
import Profile from '../components/Profile';
import NewCompanyForm from '../components/NewCompanyForm';
import { Container, Header, Content} from 'native-base';

export default class ProfileScreen extends Component {
  render(){
    return(
      <Container>
        <Header />
        <Content>
          <Profile />
        </Content>
      </Container>
    )
  }
}
