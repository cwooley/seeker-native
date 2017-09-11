import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Container, Header, Content, Tab, Tabs,  Button } from 'native-base';
import InteractionsList from './InteractionsList';
import ContactsList from './ContactsList';

class ActiveCompany extends Component{
  state = {
    activeComponent: 'contacts',
    company: null
  }

  //Could Probally Make this a dumb component on mobile, but still just going to reuse code from Webapp for Uniformity.
  activeCompany(id){
    if (this.props.companies){
      if (id !== 0){
        return this.props.companies.find(company => company.id === id)
      } else return this.props.companies[0]
    }
  }

  componentWillMount(){
    this.setState({company: {...this.activeCompany(this.props.activeCompanyId)}})
  }

  componentWillReceiveProps(nextProps){
    this.setState({company: {...this.activeCompany(nextProps.activeCompanyId)}})
  }

  renderComponents(){
    if (this.state.activeComponent === 'contacts'){
      return <ContactsList company={this.state.company} />
    }
    return <InteractionsList company={this.state.company} />
  }

  render(){
    return(
      <View>
        <View style={styles.buttonView}>
          <Button block info style={styles.tabButton} onPress={() => this.setState({activeComponent: 'contacts'})}><Text>Contacts </Text></Button>
          <Button block info style={styles.tabButton} onPress={() => this.setState({activeComponent: 'interactions'})}><Text>Interactions </Text></Button>
        </View>
        {this.renderComponents()}
      </View>

    )
  }
}

const styles = {
  buttonView: {
    flexDirection: 'row'
  },
  tabButton: {
    flex: 1
  }
}
let mapStateToProps = (state) => {
  return ({activeCompanyId: state.company.id, companies: state.user.companies})
}

export default connect(mapStateToProps)(ActiveCompany)
