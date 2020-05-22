import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker,
} from 'react-native';
import range from '../Functions/Range';

const momentCount = range(60);

class TimeInput extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            mins: 0,
            seconds: 0,
            points: 0,
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.textView}>
                    <Text style={styles.text}>{this.props.station}</Text>
                </View>
                <View style={styles.timeSelect}>
                    <Picker
                        selectedValue={this.state.mins}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({mins: itemValue})
                    }>
                        {momentCount.map((mins) => <Picker.Item label={mins.toString()} value={mins.toString()} key={mins.toString()} />)}
                    </Picker>
                    <Text style={styles.text}>Mins</Text>
                </View>
                <View style={styles.timeSelect}>
                    <Picker
                        selectedValue={this.state.seconds}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({seconds: itemValue})
                    }>
                        {momentCount.map((secs) => <Picker.Item label={secs.toString()} value={secs.toString()} key={secs.toString()} />)}
                    </Picker>
                    <Text style={styles.text}>Secs</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>{this.state.points}</Text>
                </View>
            </View>
        )
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    timeSelect: {
        flex: 0.5,

    },
    picker: {
        flex: 0.5,
        // borderWidth: 1,
        // borderColor: "black",
        height: 50, 
        width: 100
    },
    textView: {
        flex: 0.5,
        // borderColor: "black",
        // borderWidth: 1
    },
    text: {
        fontSize: 28
    }

})
  
export default TimeInput