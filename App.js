
import React, { useState, useEffect } from 'react';

import { StyleSheet, Button, Text, Alert, View, TextInput, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Home from './screen/home'

import * as Font from 'expo-font'

import { AppLoading } from 'expo'

import Navigator from './routes/drawer'


// const getFont = () => {

//   return Font.loadAsync({

//     "nonito-regular": require("./assets/fonts/"),
//     "nonito-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),

//   })

// }





const App = () => {

 // const [fontLoaded, setsFontsLoaded] = useState(false)




  return(


    <Navigator />
      

  )


  // if (fontLoaded) {

  //   return (

  //     <Home />

  //   )

  // } else {

  //   return (
  //     <AppLoading

  //       startAsync={getFont}
  //       onFinish={() => setsFontsLoaded(true)}
  //     />
  //   )
  // }




}











const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: "center",
    justifyContent: "center"


  },
  text: {

    fontSize: 29,
    marginBottom: 10,
  },



});






export default App;