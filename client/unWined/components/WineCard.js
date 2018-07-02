import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, } from 'native-base';
import { Rating, Avatar } from 'react-native-elements';


export default class WineCard extends Component {
  render() {
    return (
        <Content>
          <Card style={{flex: 0, marginBottom: 7}}>
          <CardItem>
            <Left>
              <Avatar
                medium
                rounded
                source={{uri: "https://i.imgur.com/lNJc4ZWl.jpg"}}
                activeOpacity={0.7}
              />
              <Body>
                  <Text>{this.props.wine_name}</Text>
                  <Text note>{this.props.color}</Text>
                  <Text note>{this.props.country_origin}</Text>
              </Body>
            </Left>
          </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: this.props.image_url }} style={{ height: 200, width: 340, flex: 1 }} />
                <Text style={styles.padding}>Tasting Notes:</Text>
              <Text style={styles.font}>{this.props.tasting_notes}</Text>
              <Rating
                type="star"
                fractions={1}
                startingValue={this.props.rating}
                imageSize={20}
                style={{ paddingVertical: 7 }}
              />
              </Body>
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



// import React, { Component } from 'react';
// import { StyleSheet, View, Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Accordion, } from 'native-base';
// import { Actions } from 'react-native-router-flux';

// export default class WineCard extends Component {
//   render() {
//     return (
//         <Content>
//           <Card>
//             <CardItem>
//               <Left>
//                 <Body>
//                 <Text>{this.props.wine_name}</Text>
//                 <Text note>{this.props.color}</Text>
//                 <Text>Rating: {this.props.rating} out of 5</Text>
//                 </Body>
//               </Left>
//           </CardItem>
//           <Right>
//             <CardItem cardBody>
//               <Image source={{ uri: this.props.image_url }} style={{ height: 200, width: null, flex: 1 }} />
//             </CardItem>
//           </Right>
//         </Card>
//       </Content>
//     );
//   }
// }
