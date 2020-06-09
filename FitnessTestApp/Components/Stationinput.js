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

import RNPickerSelect from 'react-native-picker-select';

class StationInput extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            reps: 0,
            points: "-",
            nextpoint: 0
        }
    }

    scoreCalc = () => {
        // console.log(this.state.reps)
        const pts = this.props.calc(this.state.reps, this.props.station);
        this.setState({
            points: pts
        })
    }

    // Just for IPPT
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.age !== this.props.age || prevProps.gender !== this.props.gender || prevProps.ex !== this.props.ex) {
            this.scoreCalc();
        }
    }

    render () {
        const repCount = [...Array(this.props.max).keys()];
        
        return (
            <View style={styles.container}>
                <View style={styles.textView}>
                    <Text style={styles.text}>{this.props.station}</Text>
                </View>
                <View style={styles.picker}>
                    <Text style={styles.text}>Reps</Text>
                    <RNPickerSelect
                        placeholder={{label: "Reps", value: "Reps"}}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({reps: itemValue}, () => {
                                this.scoreCalc();
                                });
                            }      
                        }   
                        items={
                            repCount.map((reps) => ({
                                label: reps.toString(), 
                                value: reps.toString(), 
                                key: reps.toString()
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
    picker: {
        flex: 0.4,
        // borderWidth: 1,
        // borderColor: "black",
        height: 50, 
        width: 100,
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
  
export default StationInput