/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ActivityIndicator, ImageBackground, Linking } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Data from './derek.json';
import Phone from './image/phone.png';
import derekin from './derekin';

export default class Data_derek extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    constructor(props){
        super(props);
        this.state = {
            id: this.props.navigation.state.params.id
        }
    }
    render(){
        const data = this.state
        return(
            <View style={styles.container}>
                <Text>{derekin[data.id].nama}</Text>
                <View style={styles.item_header}>
                    <View>
                        <Text style={styles.font}>Whatsapp</Text>
                        <TouchableOpacity style={styles.phone} onPress={() => Linking.openURL('whatsapp://send?text=hello&phone='+ derekin[data.id].phone)}>
                            <Image source={require('./image/phone.png')} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.font}>Telephone</Text>
                        <TouchableOpacity style={styles.phone} onPress={() => Linking.openURL(`tel:${derekin[data.id].phone}`)}>
                            <Image source={require('./image/phone.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent: "", //Centered vertically
        alignItems: 'center', // Centered horizontally
        flexDirection: "column"
    },
    item_header:{
        width: "100%",
        flex:1,
        backgroundColor: "#00b140",
        justifyContent: "space-around",
        alignItems: "center"
    },
    item_footer:{
        flex:2,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around"
    },
    item_data:{
        width: "80%",
        borderColor: "grey",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
    },
    phone:{
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "grey", 
        padding:10,
        elevation: 24,
        backgroundColor: "#00b140" 
    },
    font:{
        textAlign: "center"
    }
})