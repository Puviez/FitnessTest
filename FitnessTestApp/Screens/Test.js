import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import StationInput from '../Components/Stationinput';

class Test extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pushUps: 0,
      pushUpScore: 0,
      sitUps: 0,
      sitUpScore: 0
    }
  }

  pushUpCalc = (reps) => {
    const points = reps / 2;
    this.setState({
      pushUps: reps,
      pushUpScore: points
    })
    return points

  }

  render () {
      return (
          <View style={styles.container}>
            <Text>IPPT</Text>
            <StationInput station={"Push Ups"} calc={this.pushUpCalc} />
            <StationInput station={"Sit Ups"} calc={this.pushUpCalc} />
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

  
export default Test

