import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Switch,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import StationInput from '../Components/Stationinput';
import range from '../Functions/Range';
import Stopwatch from '../Components/Stopwatch';
import Timer from '../Components/Timer';
import Buttons from '../Components/Buttons';
import TimeInput from '../Components/Timeinput';


class MarinePFT extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      exChoice: true,
      pushUps: 0,

      crunches: 0,

      pullUps: 0,

      run: 0,

      gender: false,

      stopwatch: true
    }
  }

  scoreCalc = (reps, station) => {
    let points
    return points;
  }

  toggleTimer = () => {
    this.setState({stopwatch: !this.state.stopwatch})
  }

  toggleSwitch = () => {
    this.setState({exChoice: !this.state.exChoice})
  }

  toggleGender = () => {
    this.setState({gender: !this.state.gender})
}

  render () {
      return (
          <View style={styles.container}>
            <Text style={styles.text}>US Marines PFT</Text>
            {this.state.stopwatch ? (<Stopwatch />) : (<Timer />)} 
            {this.state.stopwatch ? (<Buttons func={this.toggleTimer} name={"Timer"} />) : (<Buttons func={this.toggleTimer} name={"Stopwatch"} />)}
            <View style={styles.switch}>
              <Text style={styles.switchText}>Push Ups</Text>
              <Switch 
                onValueChange={this.toggleSwitch} 
                value={this.state.exChoice}
              />
              <Text style={styles.switchText}>Pull Ups</Text>
            </View>
            <View style={styles.switch}>
              <Text style={styles.switchText}>Male</Text>
              <Switch 
                onValueChange={this.toggleGender} 
                value={this.state.gender}
              />
              <Text style={styles.switchText}>Female</Text>
            </View>
            {this.state.exChoice ? (<StationInput station={"Pull Ups"} calc={this.scoreCalc} pf={true} />) : (<StationInput station={"Push Ups"} calc={this.scoreCalc} pf={true} />)}
            <StationInput station={"Crunches"} calc={this.scoreCalc} pf={true} />
            <TimeInput station={"3 Mile Run"} calc={this.scoreCalc} pf={true} /> 
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 40
  },
  switch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  switchText: {
    flex: 0.2,
    alignItems: "center",
    padding: 5
  },
  text: {
    fontSize: 28,
    padding: 10
  },
  fail: {
    fontSize: 28,
    backgroundColor: "red"
  },
  pass: {
    fontSize: 28,
    backgroundColor: "lightgreen"
  }

})

  
export default MarinePFT

