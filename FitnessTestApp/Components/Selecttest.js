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
import NavButton from './Navbutton.js';


class SelectTest extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            test: ''
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <Text>Select a Test</Text>
                {this.state.test !== '' && (<Text>Attempt the {this.state.test}</Text>)}
                {this.state.test !== '' && (<NavButton name={"Let's Go!"} func={() => this.props.navigation.navigate(this.state.test)} />)}
                <Picker
                    selectedValue={this.state.test}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({test: itemValue})
                }>
                    <Picker.Item label="" value="" /> 
                    <Picker.Item label="IPPT" value="IPPT" />
                    <Picker.Item label="US Navy Seals PST" value="US Navy Seals PST" />
                    <Picker.Item label="US Marines PFT" value="US Marines PFT" />
                    <Picker.Item label="Beep Test" value="Beep Test" />
                    <Picker.Item label="UK BCFT" value="British Army BCFT" />
                </Picker>
            </View>
        )
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    picker: {
        height: 50, 
        width: 100
    }
})
  
export default SelectTest