import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Body, Content, Thumbnail, Card, CardItem, Button, Form, Item, Input, Picker, Icon, Left, Right } from 'native-base';
import { Avatar } from 'react-native-elements'

export default class Profile extends Component {
  render() {
    return (

     <ImageBackground
        style={{
          flex: 1,
          alignSelf: 'stretch',
          width: undefined,
          height: 150
        }}
        source={require('./wine-bar-purple2.jpg')}
       >
        {/* <View>
          <Text style={{ color: 'white', fontSize: 16 }}>Denver, CO</Text>
        </View> */}
        <View style={{ flex: 1, alignItems: 'center', marginTop: 18 }}>
          <Avatar
            large
            rounded
            source={{uri: "https://i.imgur.com/lNJc4ZWl.jpg"}}
            activeOpacity={0.7}
          />
          <Text style={{ color: 'white', fontSize: 20 }}>Christopher Nemeth</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>Denver, CO</Text>
        </View>

      </ImageBackground>


    )
  }
}


      //     <View style={{ flexDirection: 'column' }}>
      //   <View style={{ flex: 1}}>
      //   <Header span style={{paddingTop: 10, paddingBottom: 25}}>

            <Avatar
            large
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            activeOpacity={0.7}
          />
      //       <Text>Christopher Nemeth
      //   </Text>
      //   </Header>


      //   </View>
      // </View>







       {/* <Container>
        <Content>
          <Card>
            <CardItem  style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}} />
              <Body style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
                  <Text>Marie Jingleton</Text>
                  <Text note></Text>
              </Body>

            </CardItem>
            <CardItem>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container> */}