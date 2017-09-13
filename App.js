import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers'
import ReduxPromise from 'redux-promise';
import LoginForm from './src/components/LoginForm'
import Main from './src/components/Main'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
          <Main style={styles.main}/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000000'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
