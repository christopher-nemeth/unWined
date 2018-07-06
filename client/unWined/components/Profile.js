import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Body, Content, Thumbnail, Card, CardItem, Form, Item, Input, Picker, Icon, Left, Right } from 'native-base';
import { Avatar, Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          style={{
            flex: 1,
            alignSelf: 'stretch',
            width: undefined,
            height: 150
          }}
          source={require('./wine-bar-purple2.jpg')}
          >
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
        <View style={{ flex: 1, marginBottom: 230 }}>
          <View style={{fontSize: 16, padding: 10, marginBottom: 30, backgroundColor: 'white', marginLeft: 20, marginRight: 20, marginTop: 25}}>
            <Text style={styles.text}>BIO</Text>
            <Text style={styles.text}>When I'm not coding you can find me hiking, mountain biking, or enjoying some good food and drinks with friends.</Text>
          </View>
          <View style={{ backgroundColor: 'white', marginLeft: 20, marginRight: 20, marginTop: 5, paddingTop: 10, paddingBottom: 10 }}>
            <Text style={styles.stats}>STATS</Text>
            <Text style={styles.stats}>Total Wines Logged:  6</Text>
            <Text style={styles.stats}>Most Tasted Color:  Red</Text>
            <Text style={styles.stats}>Highest Rated:  Chateau d'Esclans Whispering Angel</Text>
            <Text style={styles.stats}>Lowest Rated:  Rombauer Chardonnay</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Button
            color = 'black'
            borderRadius={30}
            containerViewStyle={{ width: '50%', marginTop: 20 }}
            title='Log Out'
            backgroundColor='#dedede'
            onPress={() => Actions.login()}
          />
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  stats: {
    marginLeft: 20,
    paddingBottom: 5,
    fontSize: 20,
    color: '#3d1f24'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  text: {
    fontSize: 17,
    color: '#3d1f24'
  }
})