import React, { Component } from 'react';
import { 
  AppRegistry,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import { StackNavigator,NavigationActions } from 'react-navigation';

import Drawer from 'react-native-drawer';
import News from './app/news';
import {Description} from './app/news';


class Application extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  closeControlPanel = () => {
    this._drawer.close()  
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render(){
    return(
      <Drawer
        ref={(ref) => this._drawer = ref}
        content = {<ControlPanel closeControlPanel={this.closeControlPanel}/>}
        tapToClose = {true}
        openDrawerOffset={0.4}
        panCloseMask = {0.4}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main:{ opacity:(2-ratio)/2}
        })}
      >
        <HomeScreen openControlPanel={this.openControlPanel} navigation={this.props.navigation}/>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.5, shadowRadius: 3},
  main: {paddingLeft: 3},
}

class ControlPanel extends Component {
  render(){
    return(
      <View>
        <Text onPress={this.props.closeControlPanel}>hello world</Text>
      </View>
    );
  }
}
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    
  }

  constructor() {
    super()
    this.pressed = false
  }

  onPress = ()=> {
    
    const navigateAction = NavigationActions.navigate({

      routeName: 'Content',
    })

    this.props.navigation.dispatch(navigateAction)
}

  onNewsPress = ()=> {
      const navigateAction = NavigationActions.navigate({

        routeName: 'News',
      })

      this.props.navigation.dispatch(navigateAction)
  }

  
       
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={this.props.openControlPanel}
            >
               <Image style={ styles.headerImage}
                source={require('./assets/username.png')}
              />
            </TouchableOpacity>  
            <Text style={styles.headertext}> Hello World</Text>
            <Icon name="bell" color='#7D8B' size={40} />
            <Icon name="calendar"  color='#607D8B' size={40} />
            <Icon name="classic-computer" color='#607D8B' size={40} />         
          </View>
          
          <View style={styles.title}>
            <Text style={styles.titleText}> Sanjeev Gupta </Text>
            <View style={{ borderWidth:2,borderColor:'rgb(173, 136, 136)',margin:20,height:140}} />
            <View style={styles.wrapTouchable}>
              <TouchableOpacity 
                onPress={this.onPress}
                style={styles.titleTouchable}>
                <Text style={{ fontWeight:'bold',margin:10}}> Button1 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleTouchable}>
                <Text style={{fontWeight:'bold',margin:10}}> Button2 </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ margin:10,borderWidth:2,borderColor:'#bcc8db'}} />
        <ScrollView>
          <Body onPress={this.onPress} onNewsPress={this.onNewsPress}/>
        </ScrollView>
      </View>
      

    );
  }
}

class Body extends Component {
    render(){
        return(      
              
                <View style={styles.bodyContainer}>   
                  <View style={styles.textWrapper}>
                    <Text style={styles.menuText}>Banking</Text>
                  </View>
                  <View style={styles.bankContent}>
                    <ScrollView
                      horizontal = { true }
                      scrollEnabled = {true}
                      showsHorizontalScrollIndicator={true}
                    >
                      <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress = {this.props.onPress}
                        style={styles.bankTouchable}>
                          <Text style={styles.touchableText}>Deposit</Text>
                          <Icon name="box"  color='#212223' size={40} />
                      </TouchableOpacity >
                      <TouchableOpacity 
                        onPress = {this.props.onPress}
                        style={styles.bankTouchable}>  
                          <Text style={styles.touchableText}>Withdraw</Text>
                          <Icon name="triangle-right"  color='#212223' size={40} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                        onPress = {this.props.onNewsPress}
                        style={styles.bankTouchable}>  
                          <Text style={styles.touchableText}>News</Text>
                          <Icon name="text-document"  color='#212223' size={40} />
                      </TouchableOpacity>
                    </ScrollView>
                  </View>
                  <View style={styles.textWrapper}>
                    <Text style={styles.menuText}>Payment</Text>
                  </View>
                  <View style={styles.bankContent}>
                    <ScrollView
                      horizontal = { true }>
                      <TouchableOpacity style={styles.bankTouchable}>
                          <Text style={styles.touchableText}>Cash</Text>
                          <Icon name="credit"  color='#212223' size={40} />
                      </TouchableOpacity >
                      <TouchableOpacity style={styles.bankTouchable}>
                          <Text style={styles.touchableText}>Check</Text>
                          <Icon name="document"  color='#212223' size={40} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                        onPress = {this.props.onPress}
                        style={styles.bankTouchable}>  
                          <Text style={styles.touchableText}>Card</Text>
                          <Icon name="credit-card"  color='#212223' size={40} />
                      </TouchableOpacity>
                    </ScrollView>
                  </View>
                  </View>
               
            
        );
    }
}


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

const NewTest = StackNavigator({
  Home: { screen: Application },
  Content: { screen: NewScreen },
  News: { screen: News },
  Description:{ screen:Description }, 
  

});

const styles = StyleSheet.create({
  container:{
    flex:1,
   
    
  },
  wrapper:{
    flex:0.6,
    backgroundColor:'#35062a',
    borderRadius: 10,
    margin:5,
  },
  header:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'rgb(0,0,0)',
    height:80,
  },
  headertext:{
    borderRadius: 10,
    fontSize:30,
    fontWeight:'bold',
    backgroundColor:'blue',
  },
  headerImage:{
    height:60,
    width:60,
  },
  title:{
    margin:40,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  wrapTouchable:{
    flexDirection:'column',
    
  },
  titleTouchable:{
    height:50,
    width:100,
    margin:20,
    borderRadius: 10,
    backgroundColor:'#b7a3b2',
    alignItems:'center',
  },
  titleText:{
    fontSize:30,
    backgroundColor:'red',
    fontWeight:'bold',
    margin:20,
    borderRadius: 10,
  },

   bodyContainer:{
     flex:1,
     backgroundColor:'rgba(118, 53, 104,0.5)',
     margin:5,
     borderRadius:10,
   },
    textWrapper:{
      margin:10,
      backgroundColor:'rgb(150, 52, 52)',
      justifyContent:'center',
      alignItems:'center',
      height:60,
    },
    menuText:{    
        fontWeight:'bold',
        fontSize:30,
        color:'black',
    },
    bankContent:{
        flexDirection:'row',
        margin:25,
        justifyContent:'space-between', 
    },
    bankTouchable:{
        flexDirection:'column',
        height:110,
        width:110,
        margin:20,
        borderRadius: 55,
        backgroundColor:'#763568',
        alignItems:'center',
    },
    touchableText:{
       fontWeight:'bold',
       margin:10,
    }
 
})



AppRegistry.registerComponent('NewTest',()=> NewTest);
