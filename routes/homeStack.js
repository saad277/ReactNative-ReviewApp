

import React from 'react'

import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Home from '../screen/home'
import ReviewDetail from '../screen/reviewDetail'

import Header from '../shared/header'



const screens={

    Home:{

            screen:Home,
            navigationOptions:(props)=>{
             
            return {

                headerTitle:()=><Header navigation={props.navigation} title="Game zone"/>,

           
                headerTintColor:"black",

                headerStyle:{
                    backgroundColor:"lightgrey",
                   }

            }
        }

    },

    ReviewDetail:{

        screen:ReviewDetail,
        navigationOptions:{


            title:"Review Details"
        }
    },




}



const HomeStack=createStackNavigator(screens)

export default createAppContainer(HomeStack);