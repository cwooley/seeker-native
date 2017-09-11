import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { Container, Header, Content, Root } from 'native-base';
import {AsyncStorage, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompaniesList from './CompaniesList'
import NewCompanyForm from './NewCompanyForm'
import ActiveCompany from './ActiveCompany'

class Main extends Component{

  componentWillMount(){


  }

  myShittyNavSystem = () =>{
    //SWITCH TO CHECK FOR USER ALSO NEED TO CONNECT THIS TO STORE
    if (this.props.state.user.id){
      console.log("We have token rendering CompaniesList")
      // return <View><NewCompanyForm /><CompaniesList /></View>
      return <Root><ActiveCompany /></Root>
    }
    console.log("No token rendering LoginForm")
    return <LoginForm />

  }

  render () {
    return (
      <Container>
        <Header />
        <Content>
          {this.myShittyNavSystem()}
        </Content>
      </Container>
    )

  }
}

function mapStateToProps(state){
  return {state}
}

export default connect(mapStateToProps)(Main);
