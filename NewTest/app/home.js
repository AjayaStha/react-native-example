import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';

export default class HomePage extends Component{
    constructor(){
        super()
        this.text = ''
        this.state = {
            l: [],
        }
    }
    onPress = () => {
        if(this.text){
            this.state.l.push(this.text)
            this.setState({
                l: this.state.l,         
            })
        }
        
        
    }

    onChangeText = (text) => {        
        this.text= text   
    }
    
    onLongPress = (index) => { 
        
        this.state.l.splice(index,1);   
        this.setState({
            l : this.state.l,
        })
        
    }
    render(){
        let cards = this.state.l.map((item, index)  => (<Card key= {index} value={item}  onLongPress={this.onLongPress} index={index} textt={this.onChangeText}/>))
        let del = this.state.delete ? <Delete /> : null;
        //let cards = null
        //alert(JSON.stringify(this.state.l))
        return(
            <View style={styles.container}>
                <View style={styles.main}>
                    <TextInput
                        placeholder="Enter something"
                        style={{height:60,borderWidth:1,width:450,margin:10,fontSize:20}}
                        underlineColorAndroid = 'transparent'
                        placeholderTextColor = 'rgb(28, 65, 124)'
                        onChangeText = {this.onChangeText}    
                    />
                    <TouchableOpacity 
                        onPress = {this.onPress}
                        style={{height:60,width:80,margin:10,backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <Text style={styles.text}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView  style={{backgroundColor:'#a4b8d8',flex:2}}>     
                  {cards}
                </ScrollView>
            </View>
        );
    }
}

class Card extends Component{
    onLongPressClicked = (text) => {

        Alert.alert(
            'Alert Title',
            `Are you sure you wanna delete? ${this.props.value}`,
        
            [               
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => this.props.onLongPress(this.props.index)},
            ],
            { cancelable: false }
            )
    }
    render(){
        return(
            <View style={styles.textContainer}>
                <Text style={{paddingLeft:20,fontSize:20}}
                onLongPress = {this.onLongPressClicked}    
                >{this.props.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
    },
    main:{
        flex:0.2,
        flexDirection:'row',
        margin:10,
        padding: 10,
    },
    text:{
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:5,
        fontSize:20,
    },
    textContainer:{
        flex:3,
        height:40,
        backgroundColor:'#eaedf2',
        margin:10,
        borderRadius: 5
        
    },
    
})
