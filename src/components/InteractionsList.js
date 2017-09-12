import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Interaction from './Interaction'
import {deleteInteraction} from '../actions/companies'
import SwipeableDeleteList from './SwipeableDeleteList';

class InteractionsList extends Component {
  renderInteraction = (data) => <Interaction interaction={data} />
  deleteInteraction = (id) => this.props.deleteInteraction(id)

    render(){
      return(
        <View>
          <Button block info onPress={() => this.props.navigation.navigate('NewInteractionForm', this.props.company)}><Text>New Interaction</Text></Button>
          <SwipeableDeleteList
            listViewData={this.props.company.interactions}
            renderRow={this.renderInteraction}
            deleteRow={this.deleteInteraction}
          />
        </View>

      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteInteraction }, dispatch)
}


export default connect(null, mapDispatchToProps)(InteractionsList);
