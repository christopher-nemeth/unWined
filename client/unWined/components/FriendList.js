import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Picker, Icon, Left, Body, Title, Right, Textarea } from 'native-base';
import { Actions } from 'react-native-router-flux';

import FriendCard from './FriendCard'

export default class FriendList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

 componentDidMount() {
   this.getUsers()
  }

  getUsers(props) {
    fetch('https://unwined-app.herokuapp.com/users')
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res.data
        })
      })
  }

  componentWillReceiveProps(props) {
    this.getUsers()
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 0, marginBottom: 0, padding: 0, backgroundColor: '#e5e5e5' }}>
        {this.state.users.map((users, index) => {
          return (
            <FriendCard
              key={index}
              name={users.name}
              user_name={users.user_name}
              image_url={users.image_url}
              location={users.location}
              wines_logged={users.wines_logged}
            />
          )
        })}
        <View>
          <StatusBar barStyle="light-content" />
        </View>
      </ScrollView>
    )
  }
}
