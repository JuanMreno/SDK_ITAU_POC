/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules, Alert, Button} from 'react-native';
import ToastExample from './native-toast-module';
import SdkModule from './native-sdk-ios';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text numberOfLines={5}>
          Itau SDK Module
        </Text>
        <Button
          onPress={executeCallback}
          title="Exec Callback"
          color="#841584"
        />
        <Button
          onPress={requestPromise}
          title="Request Promise"
          color="#841584"
        />
      </View>
    );
  }
}

function executeCallback() {
  if(Platform.OS === 'ios') {
    //SdkModule.doThis();

    SdkModule.getData('[RN Params...]', (error, data) => {
      if (error) {
        console.error(error);
      } else {
        Alert.alert(data);
      }
    });

  }
  else {
    ToastExample.show('Awesome', ToastExample.SHORT);
  }
}

function requestPromise() {
  takeMePromiseModule();
}

async function takeMePromiseModule() {
  try {
    var data = await CalendarManager.takeMepromise();

    Alert.alert(data);
  } catch (e) {
    Alert.alert('error');
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