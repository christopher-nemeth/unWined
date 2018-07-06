import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, } from 'native-base';
import { Rating, Avatar } from 'react-native-elements';


export default class WineCard extends Component {
  render() {
    return (
      <Content>
        <Card style={{flex: 0, marginBottom: 5}}>
          <CardItem>
            <Left>
              <Avatar
                medium
                rounded
                source={{uri: this.props.image_url}}
                activeOpacity={0.7}
              />
              <Body>
                <Text>{this.props.name}</Text>
                <Text note>{this.props.user_name}</Text>
                <Text>{this.props.location}</Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <Icon style={{fontSize: 32, color: '#3d1f24', marginTop: 4}} type="Ionicons" name="md-wine" />
                <Text>Logged: {this.props.wines_logged}</Text>
              </Body>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  padding: {
    paddingTop: 10
  },
  font: {
    fontSize: 13,
    paddingTop: 2
  }
})