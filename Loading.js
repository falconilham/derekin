/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Button, ActivityIndicator, StatusBar } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import firebase from "./Firebase";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

export default class AuthLoadingScreen extends Component {
    constructor(props) {
      super(props);
      this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
