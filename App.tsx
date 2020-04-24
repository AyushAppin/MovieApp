/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/store';
import RootNavigator from './src/navigator';

const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
