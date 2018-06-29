import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Form, Item, Input, Picker, Icon, Left, Body, Title, Right, Textarea, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class WineForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wine: [],
      selected2: undefined
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

  handleChange = (event) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
    console.log(event.target);

  }

  formSubmit = (event) => {
    event.preventDefault()
    const url = 'https://unwined-app.herokuapp.com/wine'
    const postData = {
      wine_name: this.state.wine_name,
      color: this.state.color,
      varietal: this.state.varietal,
      vintage: this.state.vintage,
      country_origin: this.state.country_origin,
      tasting_notes: this.state.tasting_notes,
      rating: this.state.rating,
      image_url: this.state.image_url
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(response => {
        // this.props.updatedCard(response)
      })
    .then(this.setState({
      wine_name: '',
      color: '',
      varietal: '',
      vintage: '',
      country_origin: '',
      tasting_notes: '',
      rating: '',
      image_url: ''
      }))
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Content>
          <Item regular>
            <Input placeholder="Wine Name" name="wine_name" onChange={this.handleChange} />
          </Item>
          <Item regular picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Color"
              placeholderStyle={{ color: "#4f4f4f" }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Red" value="key0" />
              <Picker.Item label="White" value="key1" />
              <Picker.Item label="Rose" value="key2" />
            </Picker>
          </Item>
          <Item regular>
            <Input placeholder='Varietal' name="varietal" onChange={this.handleChange}/>
          </Item>
          <Item regular>
            <Input placeholder= 'Vintage' name="vintage" onChange={this.handleChange}/>
          </Item>
          <Item regular>
            <Input placeholder='Origin Country' name="origin_country" onChange={this.handleChange}/>
          </Item>
          <Item regular>
            <Input placeholder='Rating' name="rating" onChange={this.handleChange}/>
          </Item>
          <Item regular>
            <Input placeholder='Image Url' name="image_url" onChange={this.handleChange}/>
          </Item>
          <Textarea rowSpan={5} bordered placeholder="Tasting Notes:" name="tasting_notes" onChange={this.handleChange} />
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