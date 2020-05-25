import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker,
  TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
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
                    <Text style={styles.text}>Mins</Text>
                    <RNPickerSelect onValueChange={(itemValue, itemIndex) =>
                            this.setState({mins: itemValue})}
                            items={
                                momentCount.map((mins) => ({
                                    label: mins.toString(), 
                                    value: mins.toString(), 
                                    key: mins.toString()
                                    }))} 
                    />
                </View>
                <View style={styles.timeSelect}>
                    <Text style={styles.text}>Secs</Text>
                    <RNPickerSelect onValueChange={(itemValue, itemIndex) =>
                            this.setState({mins: itemValue})}
                            items={
                                momentCount.map((mins) => ({
                                    label: mins.toString(), 
                                    value: mins.toString(), 
                                    key: mins.toString()
                                    }))} 
                    />
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