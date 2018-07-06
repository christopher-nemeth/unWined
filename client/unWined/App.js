import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Icon } from 'native-base';

import Login from './components/Login';
import WineList from './components/WineList';
import WineForm from './components/WineForm';
import Profile from './components/Profile';
import FriendList from './components/FriendList';

const ListIcon = () => {
  return (
  <Icon style={{fontSize: 32, color: '#3d1f24', marginTop: 5}} type="Ionicons" name="md-list-box" />
  );
};

const PlusIcon = () => {
  return (
  <Icon style={{fontSize: 32, color: '#3d1f24', marginTop: 5}} type="Ionicons" name="md-add" />
  );
};

const UserIcon = () => {
  return (
  <Icon style={{fontSize: 32, color: '#3d1f24', marginTop: 5}} type="Ionicons" name="md-contact" />
  );
};

const FriendsIcon = () => {
  return (
  <Icon style={{fontSize: 32, color: '#3d1f24', marginTop: 5}} type="Ionicons" name="md-contacts" />
  );
};

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} initial title="Login" navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}/>
        <Scene key="tabbar" tabs tabBarStyle={styles.tabBar} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
          <Scene key="winelist" title="Wine List" icon={ListIcon} component={WineList} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} />
          <Scene key="wineform" title="Add a Wine" type="replace" icon={PlusIcon} component={WineForm} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} />
          <Scene key="profile" title="Profile" icon={UserIcon} component={Profile} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} />
          <Scene key="friends" title="Friends" icon={FriendsIcon} component={FriendList} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} />
        </Scene>
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#3d1f24'
  },
  navTitle: {
    color: '#ffffff',
    fontSize: 19
  }
})

export default App;