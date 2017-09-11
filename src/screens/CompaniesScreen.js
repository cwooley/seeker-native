import React, {Component} from 'react';
import CompaniesList from '../components/CompaniesList';
import NewCompanyForm from '../components/NewCompanyForm';
import { Container, Header, Content} from 'native-base';

export default class CompaniesScreen extends Component {
  render(){
    return(
      <Container>
        <Header />
        <Content>
          <NewCompanyForm />
          <CompaniesList />
        </Content>
      </Container>
    )  
  }
}
