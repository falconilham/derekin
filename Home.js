/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Button, TouchableOpacity, Image, Modal, ImageBackground } from "react-native";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
//import Modal from "react-native-modal";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
    }
    
    componentDidMount = () => {
        this.props.navigation.setParams({ logOut: this.logOut, OptionClick: this.OptionClick });
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
            title: 'Home',
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

    render() {
        return (
            <ImageBackground source={require('./image/menu.jpg')} style={styles.container}>
                <Modal
                    animationType="fade" 
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
                <ScrollView>
                </ScrollView> 
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        display: "flex", 
        flexDirection: "column"
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
    }
})