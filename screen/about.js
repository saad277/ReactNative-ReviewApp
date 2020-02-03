
import React, { useState, useEffect, Component } from 'react';

import { StyleSheet, Button, Text, Image, Alert, View, TextInput, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { globalStyles } from '../styles/global'



const About = () => {





  return (

    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>@saad_ea27</Text>
      <Image source={require("../assets/images/bit.jpg")} style={styles.bit} />
    </View>

  )




}





const styles = StyleSheet.create({

bit:{

alignSelf:"center"

}



})











export default About;