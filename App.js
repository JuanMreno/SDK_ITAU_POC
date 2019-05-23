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
//import FingerprintPopup from './components/fingerprint-popup'
//import stylesFp from './styles/Application.container.styles'

import FingerprintScanner from 'react-native-fingerprint-scanner';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

  
  /*
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      popupShowed: false
    };
  }
  */

  handleFingerprintShowed = () => {
    this.setState({ popupShowed: true });
  };

  handleFingerprintDismissed = () => {
    this.setState({ popupShowed: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text numberOfLines={5}>
          Example Text
        </Text>
        <Button
          onPress={nativeRequest}
          title="Native Request"
          color="#841584"
        />
        <Button
          onPress={fingerprintRequest}
          title="Fingerprint Request"
          color="#841584"
        />
        <Button
          onPress={fpSupportRequest}
          title="Fingerprint Request"
          color="#841584"
        />

        {/* {popupShowed && (
          <FingerprintPopup
            style={stylesFp.popup}
            handlePopupDismissed={this.handleFingerprintDismissed}
          />
        )} */}
      </View>
    );
  }
}

function nativeRequest() {
  if(Platform.OS === 'ios') {
    CalendarManager.getData((error, events) => {
      if (error) {
        console.error(error);
      } else {
        Alert.alert(events);
      }
    });  
  }
  else {
    ToastExample.show('Awesome', ToastExample.SHORT);
  }
}

function fingerprintRequest() {
  FingerprintScanner
    .authenticate({ description: 'Scan your fingerprint on the device scanner to continue - -' })
    .then(() => {
      console.log('AppSdkItau -> ' + 'Authenticated successfully');
    })
    .catch((error) => {
      console.log('AppSdkItau -> ' + 'fingerprintRequest Error');
      console.log('AppSdkItau -> ' + JSON.stringify(error));
      Alert.alert(error.message);
    });
}

function fpSupportRequest() {
  FingerprintScanner
    .isSensorAvailable()
    .then(biometryType => console.log('AppSdkItau -> ' + JSON.stringify(biometryType)))
    .catch(error => console.log('AppSdkItau -> ' + JSON.stringify(error)));
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