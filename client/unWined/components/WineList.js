import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Picker, Icon, Left, Body, Title, Right, Textarea } from 'native-base';
import { Actions } from 'react-native-router-flux';

import WineCard  from './WineCard'


export default class WineList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wine: [],
      users: []
    }
  }

  componentDidMount() {
   this.getWines()

  fetch('https://unwined-app.herokuapp.com/users')
    .then(res => res.json())
    .then(res => {
      this.setState({
        users: res.data
      })
    })
  }

  getWines(props) {
    fetch('https://unwined-app.herokuapp.com/wine')
      .then(res => res.json())
      .then(res => {
        this.setState({
          wine: res.data
        })
      })
  }

  componentWillReceiveProps(props) {
    this.getWines()
  }

  render() {
    return (

      <ScrollView style={{ marginTop: 0, marginBottom: 0, padding: 0, backgroundColor: '#e5e5e5' }}>
        {this.state.wine.map((wine, index) => {
          return (
            <WineCard
              key={index}
              wine_name={wine.wine_name}
              color={wine.color}
              varietal={wine.varietal}
              vintage={wine.vintage}
              country_origin={wine.country_origin}
              tasting_notes={wine.tasting_notes}
              rating={wine.rating}
              image_url={wine.image_url}
            />
          )
        })}
        <View>
          <StatusBar barStyle="light-content" />
        </View>
        </ScrollView>
    )}
}