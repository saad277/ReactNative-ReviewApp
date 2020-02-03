import React from 'react';
import { StyleSheet, Button, Modal, Text, Alert, View, TextInput, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global'
import { Formik } from 'formik';

import * as yup from 'yup';

import FlatButton from '../shared/button'

//for yup validation you have to create a schema
const reviewSchema = yup.object({


    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test("is-num-1-5", "Rating must be a number 1-5", (val) => {

        return parseInt(val) < 6 && parseInt(val) > 0             //this is condition in yup
    })


})






const reviewForm = (props) => {


    return (

        <View style={globalStyles.container}>

            <Formik
                validationSchema={reviewSchema}  //validation from yup 
                initialValues={{ title: "", body: "", rating: "" }}
                onSubmit={(values, actions) => {

                    console.log(values)

                    props.addReview(values)
                    actions.resetForm();   // clears form fields


                }}

            >
                {(props) => {               //this is form rendered

                    return (
                        <View>

                            <TextInput
                                multiline minHeight={60}
                                style={globalStyles.input}
                                placeholder="Review title"
                                onChangeText={props.handleChange("title")}
                                value={props.values.title}
                                onBlur={props.handleBlur("title")}      //from yup to handle error message
                            />
                            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                            <TextInput
                                multiline minHeight={60}
                                style={globalStyles.input}
                                placeholder="Review Body"
                                onChangeText={props.handleChange("body")}
                                value={props.values.body}
                                onBlur={props.handleBlur("body")}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                            <TextInput
                                style={globalStyles.input}
                                placeholder="Rating (1-5)"
                                onChangeText={props.handleChange("rating")}
                                value={props.values.rating}
                                keyboardType="numeric"
                                onBlur={props.handleBlur("rating")}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                            <FlatButton title="submit" color="green" onPress={props.handleSubmit} />


                        </View>

                    )


                }}


            </Formik>
        </View>
    )




}

export default reviewForm;