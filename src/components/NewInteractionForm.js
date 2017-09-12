import React, {Component} from 'react'
import {View} from 'react-native'
import {Input} from 'native-base'
import { SegmentedControls } from 'react-native-radio-buttons';

class NewInteractionForm extends Component {
  state = {
    kind: 'Application',
    status: '',
    type: ''
  }

  optionClicked = (val) => {
    this.setState({kind: val})
  }

  setValueInState = (val) => {

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
        <Input />
      </View>
    )
  }
}

export default NewInteractionForm
