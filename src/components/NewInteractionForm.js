import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Input, Button} from 'native-base'
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
        <AutoGrowingTextInput style={styles.inputStyle} placeholder={'Comments'} value={this.state.status} onChangeText={(text) => this.setState({status: text})} />
        <Button block info onPress={this.addInteractionPressed}><Text>Add Interaction</Text></Button>
      </View>
    )
  }
}
const styles = {
    inputStyle: {
      color: '#000',
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#48BBEC',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addInteraction }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewInteractionForm)
