/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nama: this.props.navigation.state.params.nama,
            latitude: null,
            longitude: null,
            error:null,
        }
    }
    
    static navigationOptions = {
        header: null
    };

    componentDidMount = () =>{
       
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <Text>{this.state.nama}</Text>
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