
import React, { useState, useEffect } from 'react';

import { StyleSheet, Button, Modal, Text, Alert, View, TextInput, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { globalStyles } from '../styles/global'

import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons';

import ReviewForm from '../screen/reviewForm'



const Home = (props) => {

    const [modelOpen, setModal] = useState(false);
    const [reviews, setReviews] = useState([


        { title: "Fisherman island", rating: 5, body: "From one piece", key: "1" },
        { title: "Node express ", rating: 4, body: "From java script", key: "2" },

        { title: "Python ", rating: 3, body: "From C++", key: "3" },




    ])

    const addReview =(review)=>{

        review.key=Math.random().toString();

        setReviews([...reviews,review])

        setModal(false)

    }


    return (

        <View style={globalStyles.container}>

            <Modal visible={modelOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name="close"
                        onPress={() => setModal(false)} 
                        style={{...styles.modalToggle,...styles.modalClose}}
                        size={24}
                        />
                    
                    <ReviewForm addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                onPress={() => setModal(true)}
                style={styles.modalToggle}
                size={24}
                color="green"
            />


            <FlatList

                data={reviews}
                renderItem={({ item }) => {         //this always takes  json as parameter  parameter name is always item

                    return (

                        <TouchableOpacity onPress={() => props.navigation.navigate("ReviewDetail", item)}>
                            <Card>
                                <Text style={globalStyles.text}>{item.title}</Text>
                            </Card>

                        </TouchableOpacity>

                    )



                }}
            />
        </View>

    )




}



const styles = StyleSheet.create({


    modalContent: {

        flex:1,

    },
    modalToggle: {

        marginBottom:10,
        borderWidth:1,
        borderColor:"#f2f2f2",
        padding:10,
        borderRadius:10,
        alignSelf:"center"

    },
    modalClose:{

        marginTop:20,
        marginBottom:0,
    }


})














export default Home;