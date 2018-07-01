import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Icon } from 'native-base';

import Login from './components/Login';
import WineList from './components/WineList';
import WineForm from './components/WineForm';
import Profile from './components/Profile';

import TestComponent from './components/TestComponent';

const ListIcon = () => {
  return (
  <Icon style={{fontSize: 32, color: '#3d1f24', marginTop: 5}} name='wine' />
  );
};

const PlusIcon = () => {
  return (
  <Icon style={{fontSize: 32, color: '#3d1f24', marginTop: 5}} name='add' />
  );
};

const UserIcon = () => {
  return (
  <Icon style={{fontSize: 32, color: '#3d1f24', marginTop: 5}} name='person' />
  );
};

const App = () => {
  return (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
      <Scene type="replace" key="root">
        <Scene key="login" title="Login" component={Login} initial />
          <Scene key="tabbar" tabs tabBarStyle={styles.tabBar}>
          <Scene key="winelist" title="Your Wines" icon={ListIcon} component={WineList}/>
          <Scene key="wineform" title="Add a Wine" type="replace" icon={PlusIcon} component={WineForm} />
          {/* <Scene key="expandedcard" title="" type="replace" component={ExpandedWineCard}/> */}
          <Scene key="profile" title="Profile" icon={UserIcon} component={Profile} />
          <Scene key="test" title="Test" icon={UserIcon} component={TestComponent} />
        </Scene>
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  navBar: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#3d1f24'
  },
  navTitle: {
    color: '#ffffff',
    fontSize: 19
  },
  tabBar: {

  }
})

export default App;