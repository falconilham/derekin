/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ActivityIndicator, Picker } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './Main';
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
      pilihan: ["Siapa Nama Guru Favorit Anda","Siapa Peliharaan pertama anda"],
      hasil_pilihan: "",
      jawaban_pilihan: ""
    };
  }

  cekUser = () => {
    if(this.state.nama == "ilham" && this.state.password == "test"){
      this.props.navigation.navigate('Main', {nama: this.state.nama});
    }else if(this.state.nama == "ilham"){
      this.setState({
        condition_user: ""
      })
    }else if(this.state.password == "test"){
      this.setState({
        condition_pass: ""
      })
    }else if(this.state.nama.length == 0 && this.state.password.length == 0){
      this.setState({
        condition_user: "Username Tidak Boleh kosong",
        condition_pass: "password Tidak Boleh Kosong"
      })
    }else if(this.state.nama != "ilham" && this.state.nama != "test"){
      this.setState({
        condition_user: "Username Salah",
        condition_pass: "Password Salah"
      })
    }else if(this.state.nama != "ilham" && this.state.password == "test"){
      this.setState({
        condition_user: "Username Salah"
      })
    }else if(this.state.password != "test" && this.state.nama == "ilham"){
      this.setState({
        condition_pass: "Password Salah"
      })
    }else{
      alert(console.error())
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
              <Text style={styles.text_login}>Login</Text>
              <TextInput style={styles.TextInput} placeholder="Input Nama Anda" onChangeText={(nama) => this.setState({nama})} />
              <Text style={{color: "red"}}>{this.state.condition_user}</Text>
              <TextInput style={styles.TextInput} placeholder="Input Password Anda" secureTextEntry onChangeText={(password) => this.setState({password})} />
              <Text style={{color: "red"}}>{this.state.condition_pass}</Text>
              <View style={styles.container_button}>
                <Button style={styles.buttonLogin} title="login" color="rgb(251, 218, 0)" onPress={() => this.cekUser()}/>
                <Text style={{color: "white", fontSize: 12, marginVertical: 15}}>Belum Punya Akun ? Daftar <Text onPress={() => this.setState({state_login: 2})}>Disini !</Text></Text>
              </View>
            </View>
          ):(
            <View style={styles.item_daftar}>
                <Text style={styles.text_login}>Daftar</Text>
                <TextInput style={styles.TextInput} placeholder="Input Nama Anda" onChangeText={(nama_daftar) => this.setState({nama_daftar})} />
                <TextInput style={styles.TextInput} placeholder="Input Email Anda" onChangeText={(email_daftar) => this.setState({email_daftar})} />
                <TextInput style={styles.TextInput} placeholder="Input Password Anda" secureTextEntry onChangeText={(password_daftar) => this.setState({password_daftar})} />
                <TextInput style={styles.TextInput1} placeholder="Re Enter Password" secureTextEntry onChangeText={(password_daftar) => this.setState({password_daftar})} />
                <TextInput style={styles.textarea} multiline={true} numberOfLines={2} placeholder="Masukan Alamat Anda" />
                <Picker style={styles.TextInput} itemStyle={{fontSize: 10, backgroundColor: "blue"}} placeholder="Pertanyaan " >
                  <Picker.Item  label = "Siapa Nama Guru Favorit Anda" value = "Siapa Nama Guru Favorit Anda" />
                  <Picker.Item  label = "Siapa Peliharaan pertama anda" value = "Siapa Peliharaan pertama anda" />
                </Picker>
                <TextInput style={styles.TextInput2} placeholder="Pilihan Anda ?" onChangeText={(jawaban_pilihan) => this.setState({jawaban_pilihan})} />
                <Button style={{width: "30%", borderRadius: 15, marginTop: 10}} title="Daftar" color="rgb(251, 218, 0)"/> 
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