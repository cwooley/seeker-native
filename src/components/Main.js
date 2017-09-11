import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { Container, Header, Content } from 'native-base';
import {AsyncStorage, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompaniesList from './CompaniesList'
import NewCompanyForm from './NewCompanyForm'
import ActiveCompany from './ActiveCompany'
import {Tabs} from './TabNavigator'
import LoginScreen from '../screens/LoginScreen'

class Main extends Component{

  componentWillMount(){


  }

  myShittyNavSystem = () =>{
    //SWITCH TO CHECK FOR USER ALSO NEED TO CONNECT THIS TO STORE
    if (this.props.state.user.id){
      console.log("We have token rendering CompaniesList")
      return <Tabs />
      // return <View><NewCompanyForm /><CompaniesList /></View>
      // return <ActiveCompany />
    }
    console.log("No token rendering LoginForm")
    return <LoginScreen />

  }

  render () {
    // return (
      // <Container>
      //   <Header />
      //   <Content>
    //       {this.myShittyNavSystem()}
    //     </Content>
    //   </Container>
    // )
    return ( this.myShittyNavSystem())
  }
}

function mapStateToProps(state){
  return {state}
}

export default connect(mapStateToProps)(Main);
