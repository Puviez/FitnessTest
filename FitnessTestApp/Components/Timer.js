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


class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      time: 0,
      isActive: false,
      unit: "Hour"
    }
  }

  timeUp = () => {
    switch(this.state.unit) {
      case ("Hour"):
        this.setState({time: this.state.time + 3600000});
        this.timer = setTimeout(this.timeUp, 200);
        break;
      case ("Minute"):
        this.setState({time: this.state.time + 60000});
        this.timer = setTimeout(this.timeUp, 200);
        break;
      case ("Second"):
        this.setState({time: this.state.time + 1000});
        this.timer = setTimeout(this.timeUp, 200);
        break;
    }
    this.setState({isActive: true})
  }
    
  
  timeDown = () => {
    switch(this.state.unit) {
      case ("Hour"):
        this.state.time >= 3600000 ? this.setState({time: this.state.time - 3600000}) : this.state.time = this.state.time;
        this.timer = setTimeout(this.timeDown, 200);
        break;
      case ("Minute"):
        this.state.time >= 60000 ? this.setState({time: this.state.time - 60000}) : this.state.time = this.state.time;
        this.timer = setTimeout(this.timeDown, 200);
        break;
      case ("Second"):
        this.state.time >= 1000 ? this.setState({time: this.state.time - 1000}) : this.state.time = this.state.time;
        this.timer = setTimeout(this.timeDown, 200);
        break;
    }
    this.state.time < 0 ? this.setState({isActive: false}) : this.setState({isActive: this.state.isActive})
  }

  stopTime = () => {
      clearTimeout(this.timer)
  }

  startTimer = () => {
    if(this.state.isActive) {
      this.state.time > 0 ? this.setState({time: this.state.time - 100}) : () => {clearTimeout(this.timerStart)}
      this.timerStart = setTimeout(this.startTimer, 100)
    }
  }

  stopTimer = () => {
      clearTimeout(this.timerStart)
      this.state.time > 0 ? this.setState({isActive: true}) : this.setState({isActive: false})
  }
  
  render () {
    const seconds = ("0" + (Math.floor(this.state.time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(this.state.time / 60000) % 60)).slice(-2);
    const hours = ("0" + (Math.floor(this.state.time / 3600000))).slice(-2);

    return (
        <View>
          <TouchableOpacity onPressIn={() => {this.setState({unit: "Hour"}, () => {this.timeUp()})}} onPressOut={this.stopTime}>
            <Text>HOUR UP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={() => {this.setState({unit: "Minute"}, () => {this.timeUp()})}} onPressOut={this.stopTime}>
            <Text>MINUTE UP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={() => {this.setState({unit: "Second"}, () => {this.timeUp()})}} onPressOut={this.stopTime}>
            <Text>SECOND UP</Text>
          </TouchableOpacity>
          <Text> {hours} : {minutes} : {seconds} </Text>
          <TouchableOpacity onPressIn={() => {this.setState({unit: "Hour"}, () => {this.timeDown()})}} onPressOut={this.stopTime}>
            <Text>HOUR DOWN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={() => {this.setState({unit: "Minute"}, () => {this.timeDown()})}} onPressOut={this.stopTime}>
            <Text>MINUTE DOWN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={() => {this.setState({unit: "Second"}, () => {this.timeDown()})}} onPressOut={this.stopTime}>
            <Text>SECOND DOWN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.startTimer}>
              <Text>START</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.stopTimer}>
              <Text>STOP</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

  
export default Timer

