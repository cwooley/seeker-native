import React from 'react';
import {TabNavigator, StackNavigator } from 'react-navigation';
import CompaniesScreen from '../screens/CompaniesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from 'react-native-elements';
import ActiveCompanyScreen from '../screens/ActiveCompanyScreen'
import NewInteractionForm from '../components/NewInteractionForm'
import NewContactForm from '../components/NewContactForm'

const ActiveCompanyStack = StackNavigator({
  ActiveCompany: {
    screen: ActiveCompanyScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'ActiveCompany'
    })
  },
  NewInteractionForm: {
    screen: NewInteractionForm
  },
  NewContactForm: {
    screen: NewContactForm
  }
}, {
  mode: 'modal',
  headerMode: 'none'
})

const CompanyListStack = StackNavigator({
  Feed: {
    screen: CompaniesScreen,
    navigationOptions: {
      title: 'Companies',
    },
  },
  ActiveCompany: {
    screen: ActiveCompanyStack,
    navigationOptions: ({ navigation }) => ({
      title: 'ActiveCompany'

    })
  }
})



export const Tabs = TabNavigator({
  Main: {
    screen: CompanyListStack,
    navigationOptions: {
      tabBarLabel: 'CompaniesList',
      tabBarIcon: ({ tintColor }) => <Icon name='format-list-bulleted' />
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon:  ({ tintColor }) => <Icon name='person' />
    }
  },
});
