import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Accordion, } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class WineCard extends Component {
  render() {
    return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                <Text>{this.props.wine_name}</Text>
                <Text note>{this.props.color}</Text>
                <Text>Rating: {this.props.rating} out of 5</Text>
                </Body>
              </Left>
          </CardItem>
          <Right>
            <CardItem cardBody>
              <Image source={{ uri: this.props.image_url }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
          </Right>
        </Card>
      </Content>
    );
  }
}
