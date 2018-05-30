import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HolePool from './src/components/HolePool';
import Dashboard from './src/containers/Dashboard';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers';
// import { game } from './Game';

const store = createStore(rootReducer);

export default class App extends React.Component {
  constructor() {
    super();
    window.holeIntervals = [];
  }

  render() {
    console.log('App start');
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Dashboard/>
          <HolePool/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9BF9C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
