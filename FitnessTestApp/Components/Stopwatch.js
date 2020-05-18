import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Buttons from './Buttons.js';

class Stopwatch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      timerOn: false,
      time: 0,
      timerStart: 0
    }
  }

  start = () => {
    this.setState({
      timerOn: true,
      time: this.state.time,
      timerStart: Date.now() - this.state.time
    });
    this.ticktock = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.timerStart
      });
    },10);
  }
  
  stop = () => {
    this.setState({
      timerOn: false
    });
    clearInterval(this.ticktock);
  }

  reset = () => {
    this.setState({
      time: 0,
      timerStart: 0
    })
  }
  
  render () {
    const centiseconds = ("0" + (Math.floor(this.state.time / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(this.state.time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(this.state.time / 60000) % 60)).slice(-2);
    const hours = ("0" + (Math.floor(this.state.time / 3600000))).slice(-2);

    return (
        <View>
          <Text> {hours} : {minutes} : {seconds} : {centiseconds} </Text>
          {this.state.timerOn === false &&
            (<Buttons name={"Start"} func={this.start} />)
          }
          {this.state.timerOn && 
            (<Buttons name={"Stop"} func={this.stop} />)
          }
          {this.state.timerOn === false && this.state.time > 0 &&
            (<Buttons name={"Reset"} func={this.reset} />)
          }
        </View>
    )
  }
}

  
export default Stopwatch