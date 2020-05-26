import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homescreen from './Screens/Homescreen.js'
import Settings from './Screens/Settings.js'
import SelectTest from './Screens/Selecttest.js';
import History from './Screens/History.js';
import IPPT from './Screens/IPPT.js';

const Stack = createStackNavigator();

class App extends React.Component {
  render () {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Homescreen} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="SelectTest" component={SelectTest} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="IPPT" component={IPPT} />
          </Stack.Navigator>
        </NavigationContainer>
      )
  }
}

export default App