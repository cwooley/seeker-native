import React, {Component} from 'react';
import {ListItem, Body, Text, Thumbnail} from 'native-base';


export default class Interaction extends Component{

  render(){
    return(
      <ListItem>
        <Body>
          <Text>{this.props.interaction.kind}</Text>
          <Text note>{this.props.interaction.status}</Text>
        </Body>
      </ListItem>
    )
  }

}
