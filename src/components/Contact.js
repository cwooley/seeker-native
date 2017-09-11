import React, {Component} from 'react';
import {ListItem, Body, Text, Thumbnail} from 'native-base';


export default class Contact extends Component{

  render(){
    return(
      <ListItem>
        <Body>
          <Text>{this.props.contact.name}</Text>
          <Text note>{this.props.contact.email}</Text>
          <Text note>{this.props.contact.phone_number}</Text>
        </Body>
      </ListItem>
    )
  }

}
