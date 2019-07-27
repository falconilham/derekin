/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ActivityIndicator, ImageBackground } from "react-native";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

export default class About extends React.Component{
        render(){
            return(
                <View>
                    <Text>About</Text>
                </View>
            )
        }
    }