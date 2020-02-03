
import React, { useState, useEffect, Component } from 'react';

import { StyleSheet, Button,Image, Text, Alert, View, TextInput, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles ,images} from '../styles/global'

import Card from '../shared/card'



const reviewDetail = (props) => {



  let rating=props.navigation.getParam("rating")

  return (

    <View style={globalStyles.container}>
        
      <Card>
        <Text>{props.navigation.getParam("title")}</Text>
        <Text>{props.navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating : </Text>
          <Image source={images.rating[rating]} />     
        </View>
        
      </Card>
    </View>

  )




}




const styles=StyleSheet.create({

rating:{

  flexDirection:"row",
  justifyContent:"center",
  paddingTop:16,
  marginTop:16,
  borderTopWidth:1,
  borderTopColor:"#eee"

}



})












export default reviewDetail;