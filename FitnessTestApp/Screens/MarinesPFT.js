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
import { CheckBox } from 'react-native-elements'
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

      push: false, 

      pushUps: 0,

      crunches: 0,

      pullUps: 0,

      run: 0,

      gender: false,

      male: true,

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
    this.setState({
      exChoice: !this.state.exChoice,
      push: !this.state.push
    }, () => console.log(this.state.push))
  }

  toggleGender = () => {
    this.setState({
      gender: !this.state.gender,
      male: !this.state.male
    }, () => console.log(this.state.male))
    
}

  render () {
      return (
          <View style={styles.container}>
            <Text style={styles.text}>US Marines PFT</Text>
            {this.state.stopwatch ? (<Stopwatch />) : (<Timer />)} 
            {this.state.stopwatch ? (<Buttons func={this.toggleTimer} name={"Timer"} />) : (<Buttons func={this.toggleTimer} name={"Stopwatch"} />)}
            <View style={styles.switch}>
              <CheckBox
                center
                title='Push Ups'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.push}
                onPress={() => {this.state.push ? this.setState() : this.toggleSwitch()}}
              />
              <CheckBox
                center
                title='Pull Ups'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.exChoice}
                onPress={() => {this.state.push ? this.toggleSwitch() : this.setState()}}
              />
            </View>
            <View style={styles.switch}>
              <CheckBox
                center
                title='Male'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.male}
                onPress={() => {this.state.male ? this.setState() : this.toggleGender()}}
              />
              <CheckBox
                center
                title='Female'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.gender}
                onPress={() => {this.state.male ? this.toggleGender() : this.setState()}}
              />
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

