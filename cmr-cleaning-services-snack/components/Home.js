import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Dimensions,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

//import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    inputValue: 'Rene Irias',
    inputValue1: 'risael31@gmail.com',
    inputValue2: 'Message',
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView>
          <View style={styles.containerNavBar}>
            <Image
              style={styles.imageNavBar}
              source={{
                uri: 'https://codehs.com/uploads/1047b5d3fb7c69f4ef2a555652b2427d',
              }}
            />
          </View>
          <View style={styles.containerHeader}>
            <Text style={styles.title}>CMR Cleaning Services</Text>
            <Text style={styles.information}>
              We are a high-quality and professional cleaning company that caters to each client's unique white glove desired services. Currently we are serving the greater Reno
              area and continuing to expand in the near future. Our unique white glove services include top quality care for your home,
              office, construction sites, and more! We provide services 24-hours a day, 7 days a week. Please
              call us today for a FREE ESTIMATE. Se Habla Espanol
            </Text>

            <TouchableHighlight
              onPress={() => {
                alert('Your request for a quote was successfully submited. An agent will contact you shortly.');
              }}>
              <Text style={styles.paragraphButtonQuote}>Get a Quote</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.containerServices}>
            <View style={styles.containerLeft}>
              <Image
                style={styles.containerImage}
                source={{
                  uri: 'https://codehs.com/uploads/e4bbb02828471aeba80d5b19daa24eca',
                }}
              />
              <Image
                style={styles.containerImage}
                source={{
                  uri: 'https://codehs.com/uploads/6b19325e1935ee43e75ab139f32de2e8',
                }}
              />
              <Image
                style={styles.containerImage}
                source={{
                  uri: 'https://codehs.com/uploads/b76d7fc259d2a887e59425a42bb95703',
                }}
              />
            </View>
            <View style={styles.containerRight}>
              <Image
                style={styles.containerImage}
                source={{
                  uri: 'https://codehs.com/uploads/f3ee1e5f008fc8d0157a03a439875174',
                }}
              />
              <Image
                style={styles.containerImage}
                source={{
                  uri: 'https://codehs.com/uploads/2d86d10df16a428e9094e6276dd1aedd',
                }}
              />
              <Image
                style={styles.containerImage}
                source={{
                  uri: 'https://codehs.com/uploads/5b652df4313dd8474aa9e386ac329faa',
                }}
              />
            </View>
          </View>

          <View style={styles.containerContact}>
            <Text style={styles.paragraphContact}>Contact us</Text>
            <Text style={styles.paragraphCellPhone}>
              (775)-507-8158
            </Text>
            <View style={styles.containerContactName}>
              <TextInput
                placeholder="Name"
                onChangeText={(inputValue) => this.setState({ inputValue })}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Email"
                onChangeText={(inputValue1) => this.setState({ inputValue1 })}
                style={styles.textInput}
              />
            </View>
            <TextInput
              onChangeText={(inputValue2) => this.setState({ inputValue2 })}
              style={styles.textInputMessage}
              placeholder="Message"
              multiline={true}
            />
            <TouchableHighlight
              onPress={() => {
                alert('Thank you! Your information has been submited. An agent will contact you shortly.');
              }}>
              <View style={styles.buttonSubmit}>
                <Text style={styles.paragraphButtonSubmit}>Submit</Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageNavBar: {
    marginStart: 10,
    marginTop: 5,
    height: 0.5 * (deviceHeight / 10),
    width: 1.2 * (deviceWidth / 10),
  },
  containerNavBar: {
    height: 0.5 * (deviceHeight / 10),
    backgroundColor: 'white',
    width: deviceWidth,
  },
  containerHeader: {
    height: 4.6 * (deviceHeight / 10),
    backgroundColor: 'white',
    width: 9.6 * (deviceWidth / 10),
    alignItems: 'center',
  },
  containerContact: {
    height: 5 * (deviceHeight / 10),
    backgroundColor: 'white',
    width: deviceWidth,
    alignItems: 'center',
  },
  containerContactName: {
    flexDirection: 'row',
    height: 0.6 * (deviceHeight / 10),
    width: 10 * (deviceWidth / 10),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraphContact: {
    color: 'black',
    textAlign: 'center',
    fontSize: deviceHeight / 30,
    marginTop: 2,
    marginBottom: 2,
    fontFamily: 'serif',
  },
  textInput: {
    height: 0.5 * (deviceHeight / 10),
    width: 4.5 * (deviceWidth / 10),
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    margin: 3,
    paddingStart: 6,
  },
  textInputMessage: {
    height: 1.5 * (deviceHeight / 10),
    width: 9.3 * (deviceWidth / 10),
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 3,
    paddingStart: 6,
    fontFamily: 'serif',
  },
  buttonSubmit: {
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#E5E059',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  paragraphButtonSubmit: {
    fontFamily: 'serif',
  },
  containerServices: {
    height: 10 * (deviceHeight / 10),
    backgroundColor: 'white',
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLeft: {
    width: 9 * (deviceWidth / 10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRight: {
    width: 9 * (deviceWidth / 10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    height: 1.4 * (deviceHeight / 10),
    width: 8.5 * (deviceWidth / 10),
    borderRadius: 10,
    marginTop: 1,
    marginBottom: 5,
  },
  paragraphButtonQuote: {
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#E5E059',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  paragraphCellPhone: {
    color: 'black',
    textAlign: 'center',
    fontSize: deviceHeight / 50,
    marginTop: 6,
    marginBottom: 6,
    fontFamily: 'serif',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: deviceHeight / 30,
    marginTop: 6,
    fontFamily: 'serif',
    fontStyle: 'italic',
  },
  information: {
    color: 'silver',
    marginTop: 6,
    marginBottom: 20,
    padding: 5,
    fontSize: deviceHeight / 62,
    fontFamily: 'serif',
  },
});
