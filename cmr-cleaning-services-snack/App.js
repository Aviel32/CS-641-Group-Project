import { AppRegistry, ScrollView, View, StatusBar, Image, TouchableHighlight, ImageBackground, Alert, Dimensions, Button, TextInput ,Text, SafeAreaView, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { Component } from 'react';
//import Constants from 'expo-constants';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Home from './components/Home';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 1,
  },
});
