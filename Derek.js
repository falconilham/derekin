/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ActivityIndicator, ImageBackground } from "react-native";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Data from './derek.json';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class Derek extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    render(){
        return(
            <ImageBackground imageStyle={{ opacity: 0.5 }} blurRadius={1} source={require('./image/bg.jpg')} style={styles.container}>
                <ScrollView style={{flex:2, width:"100%", height:"100%"}}>
                    {Data.map((item, i) => {
                        return(
                            <TouchableOpacity style={styles.item_container} key={i} onPress={() => this.props.navigation.navigate('Data', {id: i})}>
                                <Text style={styles.item}>{item.nama}</Text>
                                <Text style={styles.item}>{item.lokasi}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "black",
        color: "white",
        //justifyContent: "", //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
    item_container:{
        width: "80%",
        height: "30%",
        flex:1,
        flexDirection:"column",
        alignSelf:"center",
        alignItems: "center",
        borderWidth: 10,
        marginVertical: 20,
        borderColor: "white",
        backgroundColor: "white",
        borderRadius: 13,
        minHeight: 200,
        justifyContent: "center"
    },
    item:{
        borderBottomWidth: 1,
        borderBottomColor: "grey",
    }
})