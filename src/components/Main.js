import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { Container, Header, Content } from 'native-base';
import {AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompaniesList from './CompaniesList'

class Main extends Component{

  componentWillMount(){


  }

  myShittyNavSystem = () =>{
    //SWITCH TO CHECK FOR USER ALSO NEED TO CONNECT THIS TO STORE
    console.log("PROPS",this.props.state.user)
    if (this.props.state.user.id){
      console.log("We have token rendering CompaniesList")
      return <CompaniesList />
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
