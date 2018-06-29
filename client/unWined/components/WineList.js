import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
    fetch('https://unwined-app.herokuapp.com/wine')
      .then(res => res.json())
      .then(res => {
        this.setState({
          wine: res.data
        })
      })

    fetch('https://unwined-app.herokuapp.com/users')
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res.data
        })
      })
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
              country_origin={wine.counrty_origin}
              tasting_notes={wine.tasting_notes}
              rating={wine.rating}
              image_url={wine.image_url}
            />
          )
        })}
        </ScrollView>
    )}
}

{/* <ScrollView style={{ marginTop: 0, marginBottom: 0, padding: 0, backgroundColor: '#e5e5e5' }}> */}
{/* <ScrollView contentContainerStyle={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", width: 100, marginTop: 0, marginBottom: 0, padding: 0, backgroundColor: '#e5e5e5' }}> */}
{/* updatedHike={this.props.updatedHike} */}

