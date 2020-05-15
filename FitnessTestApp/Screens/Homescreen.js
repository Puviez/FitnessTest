
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import NavButton from '../Components/Navbutton.js';


class Homescreen extends React.Component {
    render () {
        return (
          <View style={styles.container}>
            <NavButton name={"Take Test"} func={() => this.props.navigation.navigate('SelectTest')} />
            <NavButton name={"My Scores"} func={() => this.props.navigation.navigate('History')} />
            <NavButton name={"Settings"} func={() => this.props.navigation.navigate('Settings')} />
          </View>
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
  
export default Homescreen