import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import WineListScreen from './screens/WineListScreen';
import InputFormScreen from './screens/InputFormScreen';
import ProfileScreen from './screens/ProfileScreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
};

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF'}}
        >
          <Scene key="winelist" title="List" icon={TabIcon}>
            <Scene
              key="winelist"
              component={WineListScreen}
              title="WineList"
              initial
            />
          </Scene>
          <Scene key="add" title="Add" icon={TabIcon}>
            <Scene
              key="inputform"
              component={InputFormScreen}
              title="InputForm"
            />
          </Scene>
          <Scene key="profile" title="Profile" icon={TabIcon}>
            <Scene
              key="profile"
              component={ProfileScreen}
              title="Profile"
            />
            </Scene>
        </Scene>

      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
