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
            mins: 59,
            seconds: 0,
            points: "-",
        }
    }

    scoreCalc = () => {
        const time = Math.ceil(((parseInt(this.state.mins) * 60) + (parseInt(this.state.seconds))) / 10) * 10
        console.log(time)
        const pts = this.props.calc(time, this.props.station);
        this.setState({
            points: pts
        })
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.age !== this.props.age) {
            this.scoreCalc();
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
                    <RNPickerSelect 
                        placeholder={{label: "Mins", value: "Mins"}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({mins: itemValue}, () => {
                                this.scoreCalc();
                            })}
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
                    <RNPickerSelect 
                        placeholder={{label: "Seconds", value: "Seconds"}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({seconds: itemValue}, () => {
                                this.scoreCalc();
                            })}
                        items={
                            momentCount.map((secs) => ({
                                label: secs.toString(), 
                                value: secs.toString(), 
                                key: secs.toString()
                                }))} 
                    />
                </View>
                <View style={styles.textView}>
                    {this.props.pf ? <Text style={styles.text}>Result</Text> : <Text style={styles.text}>Points</Text>}
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