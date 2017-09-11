import React, {Component} from 'react';
import ActiveCompany from '../components/ActiveCompany';
import { Container, Header, Content} from 'native-base';

export default class ActiveCompanyScreen extends Component {

  renderActiveCompany(){
    if (this.props.navigation.state.params){
      return <ActiveCompany companyId={this.props.navigation.state.params.id}/>
    }
  }
  render(){
    return(
      <Container>
        <Content>
          {this.renderActiveCompany()}
        </Content>
      </Container>
    )
  }
}
