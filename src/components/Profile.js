import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { Thumbnail, H2, Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Profile extends Component {
  render(){
    console.log(this.props.profile_image_url)

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
        <Text>{this.props.user.email}</Text>
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
  }
}
let mapStateToProps = (state) => {
  return ({user: state.user})
}

export default connect(mapStateToProps)(Profile)
