import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { Thumbnail, H2, H3, Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Progress from 'react-native-progress';

class Profile extends Component {

  getDailyProgressPercent(){
    //Cannot believe that I am reusing this monster
    let counter = 0;
    // Groan.
    let todaysDate = new Date()
    if (this.props.user.companies){
      this.props.user.companies.forEach(company =>{
        company.interactions.forEach(interaction => {
          // please dont judge me for this...
          let arr = interaction.created_at.split('T')[0].split('-')
          let matchString = [arr[1],arr[2],arr[0]].map(str => str.replace(/^0+/, "")).join('/')
          if (matchString === todaysDate.toLocaleDateString() && interaction.kind === "Application"){
            counter++;
          }
        })
      })
      return counter/this.props.user.app_goal
    }

  }

  render(){
    return(
      <View style={styles.profileContainer}>
        <H2>{this.props.user.username}</H2>
        <Image
          style={{
            alignSelf: 'center',
            height: 150,
            width: 150,
            borderWidth: 1,
            borderRadius: 75
          }}
          source={{uri:this.props.user.profile_image_url}}
          resizeMode="stretch"
        />
        <Text style={styles.justAddinSomePaddin}>{this.props.user.email}</Text>
        <H3 style={styles.justAddinSomePaddin}>Daily Application Goal: {`${this.props.user.app_goal}`}</H3>
        <Progress.Bar  progress={this.getDailyProgressPercent()} width={250} height={20} color={'rgb(102, 255, 102)'}/>
      </View>
    )
  }
}

const styles = {
  profileContainer: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    alignSelf: 'center'
  },
  profileImage: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  justAddinSomePaddin: {
    paddingTop: 10
  }
}
let mapStateToProps = (state) => {
  return ({user: state.user})
}

export default connect(mapStateToProps)(Profile)
