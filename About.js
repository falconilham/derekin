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
                    
                        <Image source={require('./image/profile.jpg')} style={{maxWidth: "10%", borderRadius: 50 , borderWidth: 1}} />
                    
                </View>
                <View style={styles.item_footer}>
                    <View style={styles.item_data}>
                        <Text style={styles.text_data}>Nama</Text>
                        <Text style={styles.text_data}>:</Text>
                        <Text style={styles.text_data}>Rafly</Text>
                    </View>
                    <View style={styles.item_data}>
                        <Text style={styles.text_data}>Kelas</Text>
                        <Text style={styles.text_data}>:</Text>
                        <Text style={styles.text_data}>Gatau</Text>
                    </View>
                    <View style={styles.item_data}>
                        <Text style={styles.text_data}>Kelas</Text>
                        <Text style={styles.text_data}>:</Text>
                        <Text style={styles.text_data}>Gatau</Text>
                    </View>
                    <View style={styles.item_data}>
                        <Text style={styles.text_data}>Kelas</Text>
                        <Text style={styles.text_data}>:</Text>
                        <Text style={styles.text_data}>Gatau</Text>
                    </View>
                </View>
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
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0cb3ca"
    },
    item_footer:{
        flex:2,
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    item_data:{
        width: "80%",
        borderColor: "grey",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text_data:{
        fontSize: 20
    }
})