import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    ScrollView,
} from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';

export default class News extends Component{
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
    }
  } 
  componentDidMount = () => {
      this.setState({
          loading:true,
      })
      fetch('https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=b7a54c6be8434cb482b9674376afca73')
      .then((response) => response.json())
      .then((data) => {
          this.setState({
              articles: data.articles,
              loading: false,
          })
      })
  }

    onPress = (a)=>{
        const navigateAction = NavigationActions.navigate({

            routeName: 'Description',

            params: {news:a},
            })
            this.props.navigation.dispatch(navigateAction)
    }

    render(){
        let articlesView = this.state.articles.map((item,index) => (<Card key={index} value={item} onPress={this.onPress}/>))
        let loader = this.state.loading ? <Loader /> : null
        return(
            <View style={styles.container}>
              <View style={styles.textWrapper}>
                <Text style={styles.text}> News </Text>
              </View>
              <ScrollView style={styles.content}>
                  {articlesView}
                  {loader}
              </ScrollView>
            </View>
        );
    } 
}

class Card extends Component{
    render(){
        let listing = this.props.value
        return(
            <View style={styles.cardContent}>
                <Text 
                     onPress = {() => this.props.onPress(listing)}
                     style={styles.cardText}> {listing.title} </Text>
                <TouchableOpacity 
                    onPress = {() => this.props.onPress(listing)}
                >
                    <Image                    
                        style={styles.cardImage}
                        source = {{ uri: listing.urlToImage}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

class Loader extends Component{ 
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator 
                color ='red' 
                size = 'large'
                />    
                <Text style={{fontSize:30,fontWeight:'bold'}}> Loading... </Text>
            </View>
        );  
    }
}

export class Description extends Component {
    render(){
        const { params } =this.props.navigation.state
        return(
            <View style={styles.cardContent}>
                <Text style={styles.cardText}> {params.news.title} </Text>
                <Image                    
                    style={styles.cardImage}
                    source = {{ uri: params.news.urlToImage}}
                />
                <Text style={{margin:10}}> {params.news.description} </Text>
            </View>
        );
    }
}



const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    textWrapper:{
      flex:0.1,
      margin:10,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:'#6d081b',
    },
    content:{
      flex:1,
     
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
    },
    cardContent:{
        borderRadius:10,
        margin:10,
        backgroundColor:'#e5ccd1'
    },
    cardText:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
    },
    cardImage:{
        margin:30,
        borderColor:'#a37881',
        height:500,
    },
    
    
});