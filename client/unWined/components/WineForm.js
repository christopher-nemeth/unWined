import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Form, Item, Input, Picker, Icon, Left, Body, Title, Right, Textarea, Button } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

export default class WineForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wine: [],
      users:[]
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
  }

  handleChange = (event, fieldName) => {
    console.log(event);
    this.setState({ [fieldName]: event})
  }

  formSubmit = () => {
    const url = 'https://unwined-app.herokuapp.com/wine'
    const data = {
      wine_name: this.state.wine_name,
      color: this.state.color,
      varietal: this.state.varietal,
      vintage: this.state.vintage,
      country_origin: this.state.country_origin,
      tasting_notes: this.state.tasting_notes,
      rating: this.state.rating,
      image_url: this.state.image_url,
      user_id: this.state.user_id
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        wine_name: this.state.wine_name,
        color: this.state.color,
        varietal: this.state.varietal,
        vintage: this.state.vintage,
        country_origin: this.state.country_origin,
        tasting_notes: this.state.tasting_notes,
        rating: this.state.rating,
        image_url: this.state.image_url,
        user_id: 1
      }),
    })
      .then(response => response.json())
      .then(response => {
        Actions.winelist({ date: Date.now() })
        Actions.refresh("winelist")
      })
      .catch(
        console.error
    )
  }

  resetForm = () => {
    this.setState({
      wine_name: '',
      color: '',
      varietal: '',
      vintage: '',
      country_origin: '',
      tasting_notes: '',
      rating: '',
      image_url: ''
    })
  }

  onColorChange = (color) => {
    this.setState({
      color
    })

  }
  render() {
    console.log(this.state);

    return (
      <Container>
        <Content>
          <Item regular>
            <Input placeholder="Wine Name" onChangeText={(event) => this.handleChange(event, "wine_name")} />
          </Item>
          <Item regular picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Color"
              placeholderStyle={{ color: "#4f4f4f" }}
              selectedValue={this.state.selected2}
              onValueChange={(event) => this.onColorChange(event, "color")}
            >
              <Picker.Item label="Red" value="Red" />
              <Picker.Item label="White" value="White" />
              <Picker.Item label="Rose" value="Rose" />
            </Picker>
          </Item>
          <Item regular>
            <Input placeholder='Varietal' onChangeText={(event) => this.handleChange(event, "varietal")}/>
          </Item>
          <Item regular>
            <Input placeholder= 'Vintage' onChangeText={(event) => this.handleChange(event, "vintage")}/>
          </Item>
          <Item regular>
            <Input placeholder='Origin Country' onChangeText={(event) => this.handleChange(event, "origin_country")}/>
          </Item>
          <Item regular>
            <Input placeholder='Rating' onChangeText={(event) => this.handleChange(event, "rating")}/>
          </Item>
          <Item regular>
            <Input placeholder='Image Url' autoCapitolize="false" onChangeText={(event) => this.handleChange(event, "image_url")}/>
          </Item>
          <Textarea rowSpan={5} bordered placeholder="Tasting Notes:" onChangeText={(event) => this.handleChange(event, "tasting_notes")}/>
          <Content>
            <Button style={[styles.button]} onPress={this.formSubmit}><Text>Submit</Text></Button>
          </Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
    backgroundColor: '#e5e5e5',
    width: 300,
    height: 50,
    marginTop: 50,
    flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
  },
  position: {
    width: 100
  }
})