

import React from 'react';


import { Button, Text, View, StyleSheet , Image,ImageBackground } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'






const Header = (props) => {



    const openDrawer = () => {

        console.log(props)

        props.navigation.openDrawer();

    }


    return (

        <ImageBackground style={styles.header} source={require("../assets/images/game_bg.png")}>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openDrawer} />
            <View style={styles.headerTitle}>
                <Image source={require("../assets/images/heart_logo.png")} style={styles.headerImage} />
                <Text style={styles.headerText}>{props.title}</Text>
            </View>
        </ImageBackground>
    )






}


export default Header;

const styles = StyleSheet.create({

    header: {

        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "lightgrey"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
    icon: {

        position: "absolute",
        left: 16,

    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10,
    },
    headerTitle:{

        flexDirection:"row",
       
    }


})




