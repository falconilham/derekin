/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage, Text, Image, TextInput, Button, ActivityIndicator, Picker } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './Main';
import * as firebase from "firebase";
//import firebase from './react-native-firebase';
import { ScrollView } from "react-native-gesture-handler";

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
      condition_user: "",
      condition_pass: "",
      errorMessage: null,
      color: "rgb(251, 218, 0)",
      loading_login: "Login",
      loading_daftar: "Daftar",
      notification: ""
    };
  }

  saveData(){
    let email = this.state.email;
    let data = {
            email: email,
        }
    AsyncStorage.setItem('email', JSON.stringify(data));
}

  UNSAFE_componentWillMount = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyAdOYxRpefL-O9Dqy7P_D9Ja4fBNtuunes",
      authDomain: "derekin-23fce.firebaseapp.com"
    }
    firebase.initializeApp(firebaseConfig);

    AsyncStorage.getItem('email', (error, result) => {
      if(result) {
        let resultParsed = JSON.parse(result)
        this.setState({
            email: resultParsed.email,
        });
        this.props.navigation.navigate('Main', {email: resultParsed.email});
        alert(resultParsed.email)
      }
    });
  }

  componentDidMount = () => {
    this.setState({
      email: "ok",
  });
  }

  cekUser = () => {
    this.setState({
      loading: "Loading ...",
    })
    if(this.state.email == ""){
      alert("Email Tidak Boleh Kosong")
      this.setState({
        loading: "Login"
      })
    }else if(this.state.password == ""){
      alert("Password Tidak Boleh Kosong")
      this.setState({
        loading: "Login"
      })
    }else{
    firebase.
      auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          email: "",
          password: ""
        })
        this.props.navigation.navigate('Main');
        this.saveData();
      }).catch((error) => 
        alert("Email Atau Password Salah")
      )
    }
  }

  Daftar = () => {
    this.setState({
      loading_daftar: "Loading ...",
    })
    if(this.state.password_daftar != this.state.re_password){
      this.setState({
        loading_daftar: "Daftar"
      })
      alert("Password Tidak Sama")
    }else{
      firebase.auth().createUserWithEmailAndPassword(this.state.email_daftar, this.state.password_daftar)
      .then(() => {
        this.setState({
          state_login: 1,
          notification: "Success",
          loading_daftar: "Daftar"
        })
      }).catch(function(error){
        this.setState({
          loading_daftar: "Daftar"
        })
        alert("Something Wrong")
      })
    }
  }
  

  static navigationOptions = {
    header: null
  };

  updateValue = (value) => {
    this.setState({ hasil_pilihan: value})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.state_login == 1 ? (
            <View style={styles.item_container}>
              <Text style = {styles.text_notification}>{this.state.notification}</Text>
              <Text style={styles.text_login}>Login</Text>
              <TextInput style={styles.TextInput} placeholder="Input Email Anda" onChangeText={(email) => this.setState({email})} />
              <Text style={{color: "red"}}>{this.state.condition_user}</Text>
              <TextInput style={styles.TextInput} placeholder="Input Password Anda" secureTextEntry onChangeText={(password) => this.setState({password})} />
              <Text style={{color: "red"}}>{this.state.condition_pass}</Text>
              <View style={styles.container_button}>
              <Button style={styles.buttonLogin} title={this.state.loading_login} color={this.state.color} onPress={() => this.cekUser()}/>
              <Text style={{color: "white", fontSize: 12, marginVertical: 15}}>Belum Punya Akun ? Daftar <Text onPress={() => this.setState({state_login: 2})}>Disini !</Text></Text>
              </View>
            </View>
          ):(
            <View style={styles.item_daftar}>
                <Text style={styles.text_login}>Daftar</Text>
                <TextInput style={styles.TextInput} placeholder="Input Email Anda" onChangeText={(email_daftar) => this.setState({email_daftar})} />
                <TextInput style={styles.TextInput} placeholder="Input Password Anda" secureTextEntry onChangeText={(password_daftar) => this.setState({password_daftar})} />
                <TextInput style={styles.TextInput1} placeholder="Re Enter Password" secureTextEntry onChangeText={(re_password) => this.setState({re_password})} />
                <Button style={{width: "30%", borderRadius: 15, marginTop: 10}} onPress={() => this.Daftar()} title={this.state.loading_daftar} color="rgb(251, 218, 0)"/> 
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
  item_container:{
    display: "flex",
    alignItems: "center", 
    //justifyContent: "center", 
    height: "50%",
    width: "100%"
  },
  item_daftar:{
    flex: 1,
    display: "flex",
    alignItems: "center", 
    justifyContent: "center", 
    height: "50%",
    width: "100%"
  },
  TextInput:{
    width: "80%", 
    height: 40, 
    backgroundColor: "white",
    //marginVertical: 15,
    marginTop: 10,
    borderRadius: 2
  },
  TextInput2:{
    width: "80%",
    backgroundColor: "white",
    marginVertical: 15,
  },
  TextInput1:{
    width: "80%", 
    height: 40, 
    backgroundColor: "white",
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 2
  },
  text_notification:{
    color: "#0eff0e",
    fontSize: 16
  },
  textarea:{
    backgroundColor : "white",
    width: "80%",
    marginBottom: 15
  },
  buttonLogin:{
    borderRadius: 15,
    margin: 10
  },
  text_login:{
    color: "white", 
    fontSize: 16,
    //alignItems: "center"
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