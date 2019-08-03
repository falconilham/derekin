/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ActivityIndicator, ImageBackground, Linking } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Data from './derek.json';
import Phone from './image/phone.png';

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
                <View style={styles.item_header}>
                    
                </View>
                <View style={styles.item_footer}>
                    <View style={styles.item_data}>
                        <Text style={{textAlign: "center"}}>{Data[data.id].nama}</Text>
                    </View>
                    <View style={styles.item_data}>
                        <Text style={{textAlign: "justify"}}>{Data[data.id].lokasi}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderWidth:1, borderRadius: 50, padding:10}} onPress={() => Linking.openURL(`tel:${Data[data.id].phone}`)}>
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
        backgroundColor: "#0cb3ca"
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
    }
})