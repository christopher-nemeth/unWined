import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground
} from 'react-native';
import {Button, FormInput} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';


export default class TestComponent extends React.Component {


  render() {
    return (<ImageBackground style={styles.wineBarBackground} source={require('./wine-bar-purple.jpg')}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./unWined-logo.png')}/>

        <FormInput inputStyle={{ color: 'black', backgroundColor: 'white', width: 235 }}
          name="username"
          placeholder="username"
          placeholderTextColor="black"
          ref={(input) => this.usernameInput = input}
          onChangeText={(username) => this.usernameInputValue = username}
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitolize="false"
        />

        <FormInput inputStyle={{ color: 'black',  backgroundColor: 'white',  width: 235, marginBottom: 20 }}
          name="password"
          secureTextEntry
          placeholder="password"
          placeholderTextColor="black"
          returnKeyType="go"
          onChangeText={(password) => this.passwordInputValue = password}
          ref={(input) => this.passwordInput = input}
          autoCapitolize="false"
        />
        <Button buttonStyle={{ marginTop: 20, color: 'black'}} title='Login' backgroundColor='#dedede'/>
      </View>
    </ImageBackground>);
  }
}

const styles = StyleSheet.create({
  image: {
    width: 500,
    alignSelf: 'center',
    marginTop: 90,
    marginBottom: 50
  },
  container: {
    // paddingLeft: 50,
    // paddingRight: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wineBarBackground: {
    height: 700
  }
});

    // <FormInput inputStyle={{
    //         color: 'black',
    //         fontWeight: 'bold',
    //         backgroundColor: 'white',
    //         opacity: .5,
    //         width: 315
    //       }} name="username" placeholder="username" placeholderTextColor="white" returnKeyType="next" ref={(input) => this.usernameInput = input} onChangeText={(username) => this.usernameInputValue = username} onSubmitEditing={() => this.passwordInput.focus()} keyboardType="email-address" autoCapitolize="false"/>