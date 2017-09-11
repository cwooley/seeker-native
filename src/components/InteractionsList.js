import React, {Component} from 'react';
import {Text} from 'react-native';
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
        <SwipeableDeleteList
          listViewData={this.props.company.interactions}
          renderRow={this.renderInteraction}
          deleteRow={this.deleteInteraction}
        />
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteInteraction }, dispatch)
}


export default connect(null, mapDispatchToProps)(InteractionsList);
