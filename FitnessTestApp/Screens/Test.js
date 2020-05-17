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
import range from '../Functions/Range';


const pushUpScoreChart = {
  1: {
    25: range(100,60),
    24: range(59,56),
    23: range(55,52),
    22: range(51,48),
    21: range(47,44),
    20: range(43,40),
    19: range(39,37),
    18: range(36,34),
    17: range(33,31),
    16: range(30,28),
    15: [27,26],
    14: [25],
    13: [24],
    12: [23],
    11: [22],
    10: [21],
    9: [20],
    8: [19],
    6: [18],
    4: [17],
    2: [16],
    1: [15],
    0: range(14)
  },
  2: {
    25: range(100,59),
    24: range(58,55),
    23: range(54,51),
    22: range(50,47),
    21: range(46,43),
    20: range(42,39),
    19: range(38,36),
    18: range(35,33),
    17: range(32,30),
    16: range(29,27),
    15: [26,25],
    14: [24],
    13: [23],
    12: [22],
    11: [21],
    10: [20],
    9: [19],
    8: [18],
    6: [17],
    4: [16],
    2: [15],
    1: [14],
    0: range(13)
  },
  3: {
    25: range(100,58),
    24: range(57,54),
    23: range(53,50),
    22: range(49,46),
    21: range(45,42),
    20: range(41,38),
    19: range(37,35),
    18: range(34,32),
    17: range(31,29),
    16: range(28,26),
    15: [25,24],
    14: [23],
    13: [22],
    12: [21],
    11: [20],
    10: [19],
    9: [18],
    8: [17],
    6: [16],
    4: [15],
    2: [14],
    1: [13],
    0: range(12)
  },
  4: {
    25: range(100,57),
    24: range(56,53),
    23: range(52,49),
    22: range(48,45),
    21: range(44,41),
    20: range(40,37),
    19: range(36,34),
    18: range(33,31),
    17: range(30,28),
    16: range(27,25),
    15: [24,23],
    14: [22],
    13: [21],
    12: [20],
    11: [19],
    10: [18],
    9: [17],
    8: [16],
    6: [15],
    4: [14],
    2: [13],
    1: [12],
    0: range(11)
  },
  5: {
    25: range(100,56),
    24: range(55,52),
    23: range(51,48),
    22: range(47,44),
    21: range(43,40),
    20: range(39,36),
    19: range(35,33),
    18: range(32,30),
    17: range(29,27),
    16: range(26,24),
    15: [23,22],
    14: [21],
    13: [20],
    12: [19],
    11: [18],
    10: [17],
    9: [16],
    8: [15],
    6: [14],
    4: [13],
    2: [12],
    1: [11],
    0: range(10)
  },
  6: {
    25: range(100,55),
    24: range(54,51),
    23: range(50,47),
    22: range(46,43),
    21: range(42,39),
    20: range(38,35),
    19: range(34,32),
    18: range(31,29),
    17: range(28,26),
    16: range(25,23),
    15: [22,21],
    14: [20],
    13: [19],
    12: [18],
    11: [17],
    10: [16],
    9: [15],
    8: [14],
    6: [13],
    4: [12],
    2: [11],
    1: [10],
    0: range(9)
  },
  7: {
    25: range(100,54),
    24: range(53,50),
    23: range(49,46),
    22: range(45,42),
    21: range(41,38),
    20: range(37,34),
    19: range(33,31),
    18: range(30,28),
    17: range(27,25),
    16: range(24,22),
    15: [21,20],
    14: [19],
    13: [18],
    12: [17],
    11: [16],
    10: [15],
    9: [14],
    8: [13],
    6: [12],
    4: [11],
    2: [10],
    1: [9],
    0: range(8)
  },
  8: {
    25: range(100,53),
    24: range(52,49),
    23: range(48,45),
    22: range(44,41),
    21: range(40,37),
    20: range(36,33),
    19: range(32,30),
    18: range(29,27),
    17: range(26,24),
    16: range(23,21),
    15: [20,19],
    14: [18],
    13: [17],
    12: [16],
    11: [15],
    10: [14],
    9: [13],
    8: [12],
    6: [11],
    4: [10],
    2: [9],
    1: [8],
    0: range(7)
  },
  9: {
    25: range(100,51),
    24: range(50,47),
    23: range(46,43),
    22: range(42,39),
    21: range(38,35),
    20: range(34,32),
    19: range(31,29),
    18: range(28,26),
    17: range(25,23),
    16: range(22,20),
    15: [19,18],
    14: [17],
    13: [16],
    12: [15],
    11: [14],
    10: [13],
    9: [12],
    8: [11],
    6: [10],
    4: [9],
    2: [8],
    1: [7],
    0: range(6)
  },
  10: {
    25: range(100,49),
    24: range(48,45),
    23: range(44,41),
    22: range(40,37),
    21: range(36,34),
    20: range(33,31),
    19: range(30,28),
    18: range(27,25),
    17: range(24,22),
    16: range(21,19),
    15: [18,17],
    14: [16],
    13: [15],
    12: [14],
    11: [13],
    10: [12],
    9: [11],
    8: [10],
    6: [9],
    4: [8],
    2: [7],
    1: [6],
    0: range(5)
  },
  11: {
    25: range(100,47),
    24: range(46,43),
    23: range(42,39),
    22: range(38,36),
    21: range(35,33),
    20: range(32,30),
    19: range(29,27),
    18: range(26,24),
    17: range(23,21),
    16: range(20,18),
    15: [17,16],
    14: [15],
    13: [14],
    12: [13],
    11: [12],
    10: [11],
    9: [10],
    8: [9],
    6: [8],
    4: [7],
    2: [6],
    1: [5],
    0: range(4)
  },
  12: {
    25: range(100,45),
    24: range(44,41),
    23: range(40,38),
    22: range(37,35),
    21: range(34,32),
    20: range(31,29),
    19: range(28,26),
    18: range(25,23),
    17: range(22,20),
    16: range(19,17),
    15: [16,15],
    14: [14],
    13: [13],
    12: [12],
    11: [11],
    10: [10],
    9: [9],
    8: [8],
    6: [7],
    4: [6],
    2: [5],
    1: [4],
    0: range(3)
  },
  13: {
    25: range(100,42),
    24: range(41,39),
    23: range(38,36),
    22: range(35,33),
    21: range(32,30),
    20: range(29,28),
    19: range(27,25),
    18: range(24,22),
    17: range(21,19),
    16: range(18,16),
    15: [15,14],
    14: [13],
    13: [12],
    12: [11],
    11: [10],
    10: [9],
    9: [8],
    8: [7],
    6: [6],
    4: [5],
    2: [4],
    1: [3],
    0: range(2)
  },
  14: {
    25: range(100,40),
    24: range(39,37),
    23: range(36,34),
    22: range(33,31),
    21: range(30,29),
    20: range(28,27),
    19: range(26,24),
    18: range(23,21),
    17: range(20,18),
    16: range(17,15),
    15: [14,13],
    14: [12],
    13: [11],
    12: [10],
    11: [9],
    10: [8],
    9: [7],
    8: [6],
    6: [5],
    4: [4],
    2: [3],
    1: [2],
    0: range(1)
  }
}

class Test extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      age: 26,
      pushUps: 0,
      pushUpScore: 0,
      sitUps: 0,
      sitUpScore: 0
    }
  }

  pushUpCalc = (reps) => {
    let points = 0;
    let ageGroup = 1;
    console.log(`Age is ${this.state.age}`)
    switch (true) {
      case (this.state.age >= 58):
        ageGroup = 14;
        break;
      case (this.state.age >= 55 && this.state.age < 58):
        ageGroup = 13;
        break;
      case (this.state.age >= 52 && this.state.age < 55):
        ageGroup = 12;
        break;
      case (this.state.age >= 49 && this.state.age < 52):
        ageGroup = 11;
        break;
      case (this.state.age >= 46 && this.state.age < 49):
        ageGroup = 10;
        break;
      case (this.state.age >= 43 && this.state.age < 46):
        ageGroup = 9;
        break;
      case (this.state.age >= 40 && this.state.age < 43):
        ageGroup = 8;
        break;
      case (this.state.age >= 37 && this.state.age < 40):
        ageGroup = 7;
        break;
      case (this.state.age >= 34 && this.state.age < 37):
        ageGroup = 6;
        break;
      case (this.state.age >= 31 && this.state.age < 34):
        ageGroup = 5;
        break;
      case (this.state.age >= 28 && this.state.age < 31):
        ageGroup = 4;
        break;
      case (this.state.age >= 25 && this.state.age < 28):
        ageGroup = 3;
        break;
      case (this.state.age >= 22 && this.state.age < 25):
        ageGroup = 2;
        break;
      default:
        ageGroup = 1;
    }
    console.log(`Age Group is ${ageGroup}`)
    console.log(`You did ${reps} reps`)
    Object.keys(pushUpScoreChart[ageGroup]).forEach((key) => {
      pushUpScoreChart[ageGroup][key].includes(parseInt(reps)) ? points = key : points = points
    })
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

