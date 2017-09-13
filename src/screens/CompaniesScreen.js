import React, {Component} from 'react';
import CompaniesList from '../components/CompaniesList';
import NewCompanyForm from '../components/NewCompanyForm';
import { Container, Header, Content} from 'native-base';
import { Platform } from 'react-native';

export default class CompaniesScreen extends Component {
  render(){
    console.log(Platform.OS)

    return(
        <Content>
          <CompaniesList navigation={this.props.navigation}/>
          <NewCompanyForm />
        </Content>
    )
  }
}
