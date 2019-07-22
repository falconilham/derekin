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
      password: "",
      nama_daftar: "",
      email_daftar: "",
      password_daftar: "",
      re_password: "",
      state_login: 1,
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
        {this.state.state_login == 1 ? (
            <View style={styles.item_container}>
              <Text style={{color: "white", fontSize: 16}}>Login</Text>
              <TextInput style={styles.TextInput} placeholder="Input Nama Anda" onChangeText={(nama) => this.setState({nama})} />
              <TextInput style={styles.TextInput} placeholder="Input Password Anda" secureTextEntry onChangeText={(password) => this.setState({password})} />
              <View style={{flexDirection: "row", width: "50%", display: "flex", justifyContent: "space-around"}}>
                <Button style={styles.buttonLogin} title="login" color="rgb(251, 218, 0)" onPress={() => this.cekUser()}/>
                <Button style={styles.buttonLogin} title="Daftar" color="rgb(251, 218, 0)" onPress={() => this.setState({state_login: 0})}/>
              </View>
            </View>
          ):(
            <View style={styles.item_container}>
              <Text style={{color: "white", fontSize: 16}}>Daftar</Text>
              <TextInput style={styles.TextInput} placeholder="Input Nama Anda" onChangeText={(nama_daftar) => this.setState({nama_daftar})} />
              <TextInput style={styles.TextInput} placeholder="Input Email Anda" onChangeText={(email_daftar) => this.setState({email_daftar})} />
              <TextInput style={styles.TextInput} placeholder="Input Password Anda" secureTextEntry onChangeText={(password_daftar) => this.setState({password_daftar})} />
              <TextInput style={styles.TextInput} placeholder="Re Enter Password" secureTextEntry onChangeText={(password_daftar) => this.setState({password_daftar})} />
              <Text style={{color: "white", fontSize: 13}}>Sudah Punya Akun ? {this.state.nama}</Text>
              <Button style={{width: "30%", borderRadius: 15}} title="Login" color="rgb(251, 218, 0)" onPress={() => this.setState({state_login: 1})}/>
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
    //alignItems: 'center', // Centered horizontally
    flex:1,
    color: "white"
  },
  item_container:{
    alignItems: "center", 
    justifyContent: "space-evenly", 
    height: "50%"
  },
  TextInput:{
    width: "80%", 
    height: 40, 
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 7
  },
  buttonLogin:{
    borderRadius: 15,
    margin: 10
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