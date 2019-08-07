/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable quotes */
/* eslint-disable no-extra-semi */
/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ActivityIndicator, ImageBackground } from "react-native";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Data from './Data_about';
import { ScrollView } from "react-native-gesture-handler";

export default class About extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.item_header}>
                    <View style={styles.Image_foto}>
                        <Image source={require('./image/encek.jpg')} style={{maxWidth: "100%", maxHeight: "100%"}}/>
                    </View>
                </View>
                <ScrollView style={styles.item_footer}>
                    {Data.map((item, i) => {
                        return(
                            <View style={styles.item_data} key={i}>
                                <View style={styles.image_wrapper}>
                                    <Image source={item.image} style={{maxWidth : "100%", maxHeight: "80%", width: "100%", height: "80%"}} />
                                </View>
                                <View style={{flexDirection: "column", justifyContent: "space-around"}}>
                                    <Text style={styles.item_key}>{item.key}</Text>
                                    <Text>{item.value}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent: "", //Centered vertically
        alignItems: 'center', // Centered horizontally
        flexDirection: "column"
    },
    item_header:{
        width: "100%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0cb3ca"
    },
    item_footer:{
        width: "100%",
        padding: 10
    },
    item_data:{
        width: "100%",
        maxHeight: "30%",
        marginVertical: "5%",
        alignSelf: "center",
        flexDirection: "row",
    },
    text_data:{
        fontSize: 20
    },
    Image_foto:{
        borderWidth: 1, 
        width: "30%", 
        height: "55%", 
        backgroundColor: "blue", 
        overflow: "hidden", 
        borderRadius: 50,
    },
    image_wrapper:{
        width: 60,
        height: 120,
        alignItems: "center",
        marginRight: 10
    },
    item_key:{
        fontSize: 17,
        fontWeight: "bold"
    }
})