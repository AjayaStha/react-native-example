import React,{ Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity } 
  from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component{
  static navigationOptions = {
    title:'Welcome',
  };
  render(){
    return <Text>Welcome to HomeScreen </Text>
  }
}

const NewTest = StackNavigator ({
  Home: { screen:HomeScreen },
});

AppRegistry.registerComponent('NewTest',()=> NewTest);