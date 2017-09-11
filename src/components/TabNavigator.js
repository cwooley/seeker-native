import React from 'react';
import {TabNavigator, StackNavigator } from 'react-navigation';
import CompaniesScreen from '../screens/CompaniesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from 'react-native-elements';
import ActiveCompanyScreen from '../screens/ActiveCompanyScreen'

const CompanyStack = StackNavigator({
  Feed: {
    screen: CompaniesScreen,
    navigationOptions: {
      title: 'Companies',
    },
  },
  ActiveCompany: {
    screen: ActiveCompanyScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'ActiveCompany'
    })
  }
})

export const Tabs = TabNavigator({
  Main: {
    screen: CompanyStack,
    navigationOptions: {
      tabBarLabel: 'CompaniesList',
      tabBarIcon: ({ tintColor }) => <Icon name='format-list-bulleted' />
    }
  },
  ActiveCompany: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon:  ({ tintColor }) => <Icon name='person' />
    }
  },
});
