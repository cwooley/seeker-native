import React from 'react';
import {TabNavigator} from 'react-navigation';
import CompaniesScreen from '../screens/CompaniesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from 'react-native-elements';


export const Tabs = TabNavigator({
  Main: {
    screen: CompaniesScreen,
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
})
