/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity, Modal, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import * as firebase from "firebase";

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            latitude: null,
            longitude: null,
            error:null,
            modal: false
        }
    }

    logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    OptionClick = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home",
            headerRight: (
                <TouchableOpacity onPress={navigation.getParam('OptionClick')}>
                    <Image
                        source={require('./image/option.png')}
                        style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                </TouchableOpacity>
            )
        }
    }

    UNSAFE_componentWillMount = () => {
        AsyncStorage.getItem('email', (error, result) => {
            if (result) {
              let resultParsed = JSON.parse(result)
              this.setState({
                  email: resultParsed.email,
              })
            }
          });
    }
    
    componentDidMount = () => {
        this.props.navigation.setParams({ logOut: this.logOut, OptionClick: this.OptionClick });
    }

    render(){
        return(
            <ImageBackground imageStyle={{ opacity: 0.5 }} blurRadius={1} source={require('./image/bg.jpg')} style={styles.container}>
                <Modal
                    animationType="slide" 
                    transparent={false} 
                    visible={this.state.modal} 
                    onPress={() => this.OptionClick}>
                    <View style={styles.container_modal}>
                        <Text style={{textAlign: "center"}}>Wanna Quit</Text>
                        <View style={styles.modal_btn}>
                        <Button 
                            title="Cancel" 
                            onPress={this.OptionClick}
                        />
                        <Button 
                            title="Log Out" 
                            onPress={this.logOut}
                            color="red"
                        />
                        </View>
                    </View>
                </Modal>
                <Text style={styles.fontBiasa}>{this.state.email}</Text>
                <TouchableOpacity style={styles.item_Main} onPress={() => this.props.navigation.navigate('About')}>
                    <Text style={styles.font}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_Main} onPress={() => this.props.navigation.navigate('Derek')}>
                    <Text style={styles.font}>Derek</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "black",
        color: "white",
        justifyContent: "space-around", //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex:1,
    },
    item_container:{
        display: "flex",
        alignItems: "center", 
        //justifyContent: "center", 
        height: "50%",
        width: "100%"
    },
    container_modal:{
        alignSelf: "center", 
        justifyContent: "center", 
        backgroundColor: "transparent", 
        width: "100%", 
        height: "100%"
    },
    modal_btn:{
        flexDirection: "row",
        display: "flex",
        width: "70%",
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 30
    },
    item_Main:{
        width: "80%", 
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center", 
        height: "30%",
        borderColor: "white",
        borderWidth: 2,
        color: "white"
    },
    font:{
        color: "white",
        fontSize: 80
    },
    fontBiasa:{
        color: "white",
        fontSize: 20
    }
})