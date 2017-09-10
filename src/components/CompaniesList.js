import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListView} from 'react-native';
import {deleteCompany} from '../actions/companies'
import { Button, Icon, List, ListItem, Text } from 'native-base';
import Company from './Company';
import SwipeableDeleteList from './SwipeableDeleteList';

class CompaniesList extends Component {

deleteCompany = (id) => {
  console.log(id)
  this.props.deleteCompany(id)
}
renderCompany = (data) => <Company company={data} />
  render(){
    return(
      <SwipeableDeleteList
        listViewData={this.props.companies}
        renderRow={this.renderCompany}
        deleteRow={this.deleteCompany}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteCompany }, dispatch)
}

function mapStateToProps(state){
  return {companies: state.user.companies}
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);
