import React, { Component } from 'react';
import { ListView} from 'react-native';
import {deleteCompany} from '../actions/companies'
import { Button, Icon, List, ListItem, Text } from 'native-base';

//PROPS FOR COMPONENT
// listViewData ----> Array of stuff to render into rows
// renderRow    ----> Function to render a row from one array element, template: data => <Company company={data} />
// deleteRow       ----> Function that invokes the proper action to delete element

class SwipeableDeleteList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
    };
  }

  render(){
    return (
      <List
       dataSource={this.ds.cloneWithRows(this.props.listViewData)}
       renderRow={this.props.renderRow}
       renderLeftHiddenRow={() => {}}
       renderRightHiddenRow={(data, secId, rowId, rowMap) =>
         <Button full danger onPress={event => this.props.deleteRow(data.id)}>
           <Icon active name="trash" />
         </Button>}
       rightOpenValue={-75}
     />
    )
  }
}

export default SwipeableDeleteList
