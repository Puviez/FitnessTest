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

class Buttons extends React.Component {
    render () {
        return (
            <View>
              <TouchableOpacity onPress={this.props.func}>
                <Text>{this.props.name}</Text>
              </TouchableOpacity>
            </View>
        )
    }
  }

  
export default Buttons