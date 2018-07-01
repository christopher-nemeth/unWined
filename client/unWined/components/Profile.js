import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Picker, Icon } from 'native-base';
import { Avatar } from 'react-native-elements'

export default class Profile extends Component {
  render() {
    return (
      <View>
       <Avatar
          large
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>
    )
  }
}