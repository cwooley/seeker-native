import React, { Component } from 'react';
import {ListItem, Body, Text, Thumbnail} from 'native-base';
import TimeAgo from 'react-native-timeago';




class Company extends Component{
  getLogoUrl(){
    return {uri: `http://logo.clearbit.com/${this.props.company.name}.com`}
  }

  makeLastContact(){
      if (this.props.company.interactions){
        let length = this.props.company.interactions.length
        if (length === 0 ){
          return 'never'
        }
        let lastContactDate = Date.parse(this.props.company.interactions[length-1].created_at)
        return <TimeAgo time={lastContactDate} />
      }
    }

  setActiveCompany = () => {
    console.log("HIT SET ACTIVECOMPANY", this.props.navigation)
    this.props.navigation.navigate('ActiveCompany', this.props.company)
  }

  render(){
    console.log("COMPANY PROPS",this.props)
    return(
      <ListItem onPress={this.setActiveCompany}>
        <Thumbnail square size={80} source={this.getLogoUrl()}  onPress={this.setActiveCompany}/>
        <Body>
          <Text>{this.props.company.name}</Text>
          <Text note>Last contact: {this.makeLastContact()}</Text>
        </Body>
      </ListItem>
    )
  }
}


export default Company
