import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import InteractionsList from './InteractionsList';
import ContactsList from './ContactsList';

class ActiveCompany extends Component{
  //Could Probally Make this a dumb component on mobile, but still just going to reuse code from Webapp for Uniformity.
  activeCompany(){
    if (this.props.companies){
      if (this.props.activeCompanyId !== 0){
        return this.props.companies.find(company => company.id === this.props.activeCompanyId)
      } else return this.props.companies[0]
    }
  }


  render(){
    return(
      <Container>
        <Header hasTabs />
        <Tabs initialPage={1}>
          <Tab heading="ContactsList">
            <ContactsList company={this.activeCompany()}/>
          </Tab>
          <Tab heading="InteractionsList">
            <InteractionsList company={this.activeCompany()}/>
          </Tab>
        </Tabs>
       </Container>
    )
  }
}

let mapStateToProps = (state) => {
  return ({activeCompanyId: state.company.id, companies: state.user.companies})
}

export default connect(mapStateToProps)(ActiveCompany)
