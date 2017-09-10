import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListView} from 'react-native';
import {deleteCompany} from '../actions/companies'
import { Button, Icon, List, ListItem, Text } from 'native-base';
import Company from './Company'

class CompaniesList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: []
    };
  }


  componentWillMount(){
    this.setState({listViewData: this.props.state.user.companies})
  }
  renderCompanies(){
    return this.props.state.user.companies.map(company => <Company company={company} />)
  }
  render(){
    console.log("PROPS", this.props)
    return (
      <List
       dataSource={this.ds.cloneWithRows(this.props.state.user.companies)}
       renderRow={data => <Company company={data} />}
       renderLeftHiddenRow={() => {}}
       renderRightHiddenRow={(data, secId, rowId, rowMap) =>
         <Button full danger onPress={event => this.props.deleteCompany(data.id)}>
           <Icon active name="trash" />
         </Button>}
       rightOpenValue={-75}
     />


    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteCompany }, dispatch)
}

function mapStateToProps(state){
  return {state}
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);
