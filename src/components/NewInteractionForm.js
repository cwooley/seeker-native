import React, {Component} from 'react'
import {View, Text, Platform} from 'react-native'
import { Button, Input, Item } from 'native-base'
import { SegmentedControls } from 'react-native-radio-buttons';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addInteraction } from '../actions/companies.js'

class NewInteractionForm extends Component {
  state = {
    kind: 'Application',
    status: '',
  }

  optionClicked = (val) => {
    this.setState({kind: val})
  }

  addInteractionPressed = () => {
    let interactionObj = {...this.state}
    interactionObj.company_id = this.props.navigation.state.params.id
    this.props.addInteraction(interactionObj)
    this.props.navigation.goBack()
  }

  makeTextInput(){
    console.log("PLATFORM.OS", Platform.OS)
    if (Platform.OS === 'ios'){
      return <AutoGrowingTextInput style={styles.inputStyle} placeholder={'Comments'} value={this.state.status} onChangeText={(text) => this.setState({status: text})} />
    }
    return <Input  placeholder={'Comments'} value={this.state.status} onChangeText={(text) => this.setState({status: text})} />
  }

  render(){
    const options = ["Application", "Interview", "Follow-up"]

    return(
      <View>
        <SegmentedControls
          options={ options }
          onSelection={ this.optionClicked }
          selectedOption={ this.state.kind }
          extractText={ (option) => option }
        />
        <Item regular >
          <Input style={styles.inputStyle}  onChangeText={(text)=> this.setState({ status: text})} value={this.state.status}/>
        </Item>
        <Button block info onPress={this.addInteractionPressed}><Text>Add Interaction</Text></Button>
      </View>
    )
  }
}


const styles = {
    input: {
      height: 50,
      width: 300,
      backgroundColor: '#ffffff',
    },
    inputStyle: {
      color: '#000',
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#48BBEC',
      height: 50,
      padding: 10,
      margin: 10,
      fontSize: 18,
      lineHeight: 23,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addInteraction }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewInteractionForm)
