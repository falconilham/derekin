/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ActivityIndicator } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './Main';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      login: 1
    };
  }

  cekUser = () => {
    if(this.state.nama.length > 4){
      this.props.navigation.navigate('Main', {nama: this.state.nama});
    }else{
      alert("Minimal 5 Karakter")
    }
  }
  
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.login == 1 ? (
            <View>
              <Text style={{color: "white"}}>Login</Text>
              <TextInput style={styles.TextInput} placeholder="Input Nama Anda" onChangeText={(nama) => this.setState({nama})} />
              <Button style={{width: "30%", borderRadius: 15}} title="login" color="rgb(251, 218, 0)" onPress={() => this.cekUser()}/>
              <Button style={{width: "30%", borderRadius: 15}} title="Daftar" color="rgb(251, 218, 0)" onPress={() => this.setState({login: 0})}/>
            </View>
          ):(
            <View>
              <Text>Login</Text>
              <Button style={{width: "30%", borderRadius: 15}} title="Daftar" color="rgb(251, 218, 0)" onPress={() => this.setState({login: 1})}/>
            </View>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#004689",
    color: "white",
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    flex:1,
    color: "white"
  },
  TextInput:{
    width: "80%", 
    height: 40, 
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 15
  }
});

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Main: {
    screen: Main
  }
});

export default createAppContainer(AppNavigator);