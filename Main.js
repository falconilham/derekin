/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, AsyncStorage, View, Text, Image, TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            latitude: null,
            longitude: null,
            error:null,
        }
    }

    async LogOut(email) {
        try{
            await AsyncStorage.removeItem('email')
            .then(() => {
                this.props.navigation.navigate('Login')
            })
            return true;
        }
        catch(exception){
            return false
        }
    }
    
    static navigationOptions = {
        header: null
    };

    UNSAFE_componentWillMount = () => {
        AsyncStorage.getItem('email', (error, result) => {
            if(result) {
              let resultParsed = JSON.parse(result)
              this.setState({
                  email: resultParsed.email,
              })
            }
          });
    }
    componentDidMount = () =>{
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <Text>{this.state.email}</Text>
                    <Button onPress={() => this.LogOut()} title="Logout" />
                </ScrollView>
            </View>
        )
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
    }
})