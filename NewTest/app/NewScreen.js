import React,{ Component } from 'react';
import { AppRegistry,View,StyleSheet,Text,Image } from 'react-native';

class NewScreen extends Component {
  static navigationOptions = {
    title:'Details',
  }
  
  render(){
    return(
      <View style={{margin:10}}>
          <Text style={{margin:10,fontWeight:'bold',textAlign:'center'}}
          >hello world</Text>
          
          <Text>asdf </Text>
          <View style={{height:2,backgroundColor:'rgba(0,0,0,0.2)',margin:10,marginBottom:10}} />
      </View>
    );
  }
}
