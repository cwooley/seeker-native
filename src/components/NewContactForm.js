import React, {Component} from 'react'
import {Text} from 'react-native'
import { Container, Header, Content, Input, Item, Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact, addInteraction } from '../actions/companies.js'


class NewContactForm extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    position: ''
  }

  addContactPressed = () => {
    let contactObj = {...this.state}
    contactObj.company_id = this.props.navigation.state.params.id
    this.props.addContact(contactObj)
    this.props.navigation.goBack()
  }

  render(){
    console.log("NEWCONTACTFORM PROPS", this.props)
    return(
      <Container>
        <Header />
        <Content>
          <Item regular>
            <Input placeholder='Name' onChangeText={(text) => this.setState({ name: text })} value={this.state.name} />
          </Item>
          <Item regular>
            <Input placeholder='908 489 2876' onChangeText={(text) => this.setState({ phone: text })} value={this.state.phone} />
          </Item>
          <Item regular>
            <Input placeholder='contact@email.com' onChangeText={(text) => this.setState({ email: text })} value={this.state.email} />
          </Item>
          <Item regular>
            <Input placeholder='Recruiter' onChangeText={(text) => this.setState({ position: text })} value={this.state.position} />
          </Item>
          <Button block info onPress={this.addContactPressed}><Text>Add Contact</Text></Button>
        </Content>
      </Container>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addContact }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewContactForm)
