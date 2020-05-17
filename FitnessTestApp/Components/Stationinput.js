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

const repCount = [...Array(101).keys()];

class StationInput extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            reps: 0,
            points: 0,
            nextpoint: 0

        }
    }

    scoreCalc = () => {
        // console.log(this.state.reps)
        const pts = this.props.calc(this.state.reps);
        this.setState({
            points: pts
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.textView}>
                    <Text style={styles.text}>{this.props.station}</Text>
                </View>
                <View>
                    <Picker
                        selectedValue={this.state.reps}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({reps: itemValue}, () => {
                                this.scoreCalc();
                            });
                        }      
                    }>
                        {repCount.map((rep) => <Picker.Item label={rep.toString()} value={rep.toString()} key={rep.toString()} />)}
                    </Picker>
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
    picker: {
        flex: 0.25,
        // borderWidth: 1,
        // borderColor: "black",
        height: 50, 
        width: 100
    },
    textView: {
        flex: 0.25,
        // borderColor: "black",
        // borderWidth: 1
    },
    text: {
        fontSize: 28
    }

})
  
export default StationInput