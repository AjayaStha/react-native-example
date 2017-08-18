import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default class Todo extends Component{
    constructor(){
        super();
        this.text = ''
        this.state = {
            list : [],
        }
    }
    onPress = () =>{
        this.state.list.push(this.text)
        this.setState({
            list: this.state.list
        })
    }
    onChangeText = (text) => {
        this.text = text 
    }
    render(){
         let listView = this.state.list.map((item, index)  => ( key= {index}, <Text> item={item} </Text>))
        return(
            <View style={styles.container}>
                <View style={styles.textAddContainer}>
                    <TextInput
                        placeholder = "Enter something"
                        underlineColorAndroid = 'transparent'
                        style={styles.textInput}
                        onChangeText =   {this.onChangeText}
                        />
                    <TouchableOpacity
                        onPress={this.onPress}
                        style={styles.textWrapper}> 
                        <Text style={styles.text}> ADD </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {listView}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textAddContainer:{
        flex:1,
        flexDirection:'row',
        borderRadius:10,
        margin:30,
    },
    textInput:{
        borderWidth:1,
        height:50,
        width:470,
        marginRight:10,
    },
    textWrapper:{
        backgroundColor:'#42f4f1',
        height:50,
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
    }
});