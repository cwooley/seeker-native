import React, { Component } from 'react';
import {ListItem, Body, Text, Thumbnail} from 'native-base';

class Company extends Component{
  getLogoUrl(){
    return {uri: `http://logo.clearbit.com/${this.props.company.name}.com`}
  }

  render(){
    return(
      <ListItem>
        <Thumbnail square size={80} source={this.getLogoUrl()} />
        <Body>
          <Text>{this.props.company.name}</Text>
          <Text note>Its time to build a difference . .</Text>
        </Body>
      </ListItem>
    )
  }
}


export default Company
