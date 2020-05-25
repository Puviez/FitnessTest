import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import TimeInput from '../Components/Timeinput';



class Settings extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <TimeInput />
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
  
export default Settings