import React from 'react';
import { Text,View, Image, StyleSheet, TextInput, ImageBackground, StatusBar } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { Container, Header, Content, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {

  render() {
    return (
      <ImageBackground style={styles.wineBarBackground} source={require('./wine-bar-purple.jpg')}>
      <View style={styles.container}>
          <Image style={styles.logo} source={require('./unWined-logo.png')} />
          <FormLabel></FormLabel>
          <FormInput
            inputStyle={{ color: 'black', backgroundColor: 'white', width: 250, paddingLeft: 10, marginBottom: 10 }}
            borderRadius={30}
            name="username"
            placeholder="Username"
            placeholderTextColor="Gray"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <FormLabel></FormLabel>
          <FormInput
            borderRadius={30}
            inputStyle={{ color: 'black', backgroundColor: 'white', width: 250, paddingLeft: 10, marginBottom: 10 }}
            name="username"
            placeholder="Password"
            placeholderTextColor="Gray"
            secureTextEntry
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitolize="none"
          />
          <Button
            borderRadius={30}
            containerViewStyle={{ width: '50%', marginTop: 60 }}
            title='Login'
            backgroundColor='#dedede'
            onPress={() => Actions.winelist()}
          />
          <Button
            borderRadius={30}
            containerViewStyle={{ width: '50%', marginTop: 20 }}
            title='Sign Up!'
            backgroundColor='#dedede'
          />
          <StatusBar barStyle="light-content" />
      </View>
    </ImageBackground>);
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    alignSelf: 'center',
    marginTop: 135,
    marginBottom: 80
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  wineBarBackground: {
    height: 750
  }
});