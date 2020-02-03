
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import homeStack from './homeStack'
import aboutStack from './aboutStack'





const rootDrawerNavigator=createDrawerNavigator({



    Home:{

        screen:homeStack
    },
    About:{

        screen:aboutStack
    }





})

export default createAppContainer(rootDrawerNavigator)