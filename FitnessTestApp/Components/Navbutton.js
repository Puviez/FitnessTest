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

class NavButton extends React.Component {
    render () {
        return (
            <View>
              <TouchableOpacity onPress={this.props.func} style={styles.text}>
                <Text>{this.props.name}</Text>
              </TouchableOpacity>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    text: {
        color: 'darkslateblue',
        fontSize: 40,
        width: 200,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 2,
        paddingTop: 2,
        paddingBottom: 2,
        margin: 5
    }
})
  
export default NavButton