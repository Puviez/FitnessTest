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
import RNPickerSelect from 'react-native-picker-select';

import StationInput from '../Components/Stationinput';
import range from '../Functions/Range';
import Stopwatch from '../Components/Stopwatch';
import Timer from '../Components/Timer';
import Buttons from '../Components/Buttons';
import TimeInput from '../Components/Timeinput';


class SealPST extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pushUps: 0,
    //   pushUpsResult: false,
      sitUps: 0,
    //   sitUpsResult: false,
      pullUps: 0,
    //   pullUpsResult: false,
      run: 0,
    //   runResult: false,
      swim: 0,
    //   swimResult: false,
      stopwatch: true
    }
  }

  scoreCalc = (reps, station) => {
    let points
    switch (station) {
        case ("500 Yard Swim") :
            reps > 750 ? points = "Fail" : points = "Pass";
            this.setState({swim: points});
            break;
        case ("Push Ups") :
            reps >= 50 ? points = "Pass" : points = "Fail";
            this.setState({pushUps: points});
            break;
        case ("Sit Ups") :
            reps >= 50 ? points = "Pass" : points = "Fail";
            this.setState({sitUps: points});
            break;
        case ("Pull Ups") :
            reps >= 10 ? points = "Pass" : points = "Fail";
            this.setState({pullUps: points});
            break;
        case ("2.4km Run") :
            reps > 630 ? points = "Fail" : points = "Pass";
            this.setState({run: points});
            break;
    }
    return points;
  }

  toggleTimer = () => {
    this.setState({stopwatch: !this.state.stopwatch})
  }

  render () {
      return (
          <View style={styles.container}>
            <Text style={styles.text}>US Navy Seals PST</Text>
            {this.state.stopwatch ? (<Stopwatch />) : (<Timer />)} 
            {this.state.stopwatch ? (<Buttons func={this.toggleTimer} name={"Timer"} />) : (<Buttons func={this.toggleTimer} name={"Stopwatch"} />)}  
            <TimeInput station={"500 Yard Swim"} calc={this.scoreCalc} pf={true} />       
            <StationInput station={"Push Ups"} calc={this.scoreCalc} pf={true} max={151} />
            <StationInput station={"Sit Ups"} calc={this.scoreCalc} pf={true} max={151} />
            <StationInput station={"Pull Ups"} calc={this.scoreCalc} pf={true} max={101} />
            <TimeInput station={"2.4km Run"} calc={this.scoreCalc} pf={true} /> 
            {this.state.pushUps && this.state.run && this.state.sitUps && this.state.swim && this.state.pullUps === "Pass" ? 
                (<Text style={styles.pass}>Result: PASS</Text>) : (<Text style={styles.fail}>Result: FAIL</Text>)}
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
  text: {
    fontSize: 28
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

  
export default SealPST

