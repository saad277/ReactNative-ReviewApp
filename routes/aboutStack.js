import {createStackNavigator} from 'react-navigation-stack'

import About from '../screen/about'

import Header from '../shared/header'

import React from 'react'


const screens={

About:{

    screen:About,
    navigationOptions:(props)=>{
             
        return {

            headerTitle:()=><Header navigation={props.navigation} title="About"/>,

       
            headerTintColor:"black",

            headerStyle:{
                backgroundColor:"lightgrey",
               }

        }
    }
}


}




const aboutStack=createStackNavigator(screens)

export default aboutStack;
