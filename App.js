/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules, Alert, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const CalendarManager = NativeModules.CalendarManager;

    CalendarManager.setData('Itau-test');  

    CalendarManager.requestData(
      'Itau-test'//, 
      /*
      (error, events) => {
        if (error) {
          console.error(error);
        } else {
          Alert.alert(events);
        }
      }
      */
    );
    
    /*
    CalendarManager.findEvents((error, events) => {
      if (error) {
        console.error(error);
      } else {
        Alert.alert(events);
      }
    });
    */



    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            CalendarManager.getData((error, events) => {
              if (error) {
                console.error(error);
              } else {
                Alert.alert(events);
              }
            });            
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
