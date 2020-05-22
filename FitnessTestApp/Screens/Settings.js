import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Stopwatch from '../Components/Stopwatch';
import Timer from '../Components/Timer';

class Settings extends React.Component {
    render () {
        return (
            <View style={styles.container}><Timer /></View>
        )
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
  
export default Settings