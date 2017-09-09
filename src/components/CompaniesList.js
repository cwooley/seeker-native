import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Text} from 'react-native';
import {List} from 'native-base';
import Company from './Company'

class CompaniesList extends Component {
  renderCompanies(){
    return this.props.state.user.companies.map(company => <Company company={company} />)
  }
  render(){
    console.log("PROPS", this.props)
    return (
       <List>
         {this.renderCompanies()}
       </List>
    )
  }
}


function mapStateToProps(state){
  return {state}
}

export default connect(mapStateToProps)(CompaniesList);
