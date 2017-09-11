import React, {Component} from 'react';
import ActiveCompany from '../components/ActiveCompany';
import { Container, Header, Content} from 'native-base';

export default class ActiveCompanyScreen extends Component {

  render(){
    console.log("ActiveCompany ID from screen", this.props.navigation.state.params.id)
    return(
      <Container>
        <Content>
          <ActiveCompany companyId={this.props.navigation.state.params.id}/>
        </Content>
      </Container>
    )
  }
}
