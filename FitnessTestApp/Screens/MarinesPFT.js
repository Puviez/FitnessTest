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
    //   pushUpsResult: false,
      crunches: 0,
    //   sitUpsResult: false,
      pullUps: 0,
    //   pullUpsResult: false,
      run: 0,
    //   runResult: false,
      gender: "Male",
    //   swimResult: false,
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

  render () {
      return (
          <View style={styles.container}>
            <Text style={styles.text}>US Marines PFT</Text>
            {this.state.stopwatch ? (<Stopwatch />) : (<Timer />)} 
            {this.state.stopwatch ? (<Buttons func={this.toggleTimer} name={"Timer"} />) : (<Buttons func={this.toggleTimer} name={"Stopwatch"} />)}
            <View style={styles.switch}>
              <Text>Exercise Option</Text>
              <Switch onValueChange={this.toggleSwitch} value={this.state.exChoice} />
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
    flex: 0.1,
    flexDirection: "row",
    paddingTop: 20,
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

